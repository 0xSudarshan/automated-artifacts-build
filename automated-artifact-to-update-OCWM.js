import { Octokit } from '@octokit/core'
import {getInput} from '@actions/core'

const AUTH_TOKEN = getInput('AUTH_TOKEN')
const ORGANISATION = getInput('ORGANISATION')
// const REPOSITORIES  = getInput('REPOSITORIES')
const REPOSITORIES  = ["Test-Repo-1","Test-Repo-2"]

const octokit = new Octokit({
    auth: AUTH_TOKEN
})
for(let r=0 ; r< REPOSITORIES.length;r++){
    const {data} = await octokit.request('GET /repos/{org}/{repo}/issues?labels=agenda', {
        org:ORGANISATION,
        repo:REPOSITORIES[r],
      });
    const workMeetings = await octokit.request('GET /repos/{org}/{repo}/issues?labels=Working%20Meetings&per_page=1', {
        org: ORGANISATION,
        repo: 'Community',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    let body = workMeetings.data[0].body
    let issue_numer = workMeetings.data[0].number
    for (let i = 0; i < data.length; i++) {
        let url = data[i].html_url
        let author = data[i].user.login
        let search = parseInt(JSON.stringify(body).search(url))
        if (search === -1) {
            let startIndex = parseInt(JSON.stringify(body.indexOf('\r\n| -- | -- | -- |\r\n')))
            let lastIndex = startIndex + 19
            let json_text = JSON.stringify(body.substring(0, lastIndex + 1) + `| ${url} | ${author} |\r\n` + body.substring(lastIndex + 1, body.length))
            body = JSON.parse(json_text)
        }
    }
    let template = JSON.stringify(JSON.stringify(body))
    let parsed = JSON.parse(JSON.parse(template))
    octokit.request('PATCH /repos/{orgs}/{repo}/issues/{issue_number}', {
        orgs: ORGANISATION,
        repo: 'Community',
        issue_number: `${issue_numer}`,
        body: parsed,
        milestone: null,
        state: 'open',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}

    

    



