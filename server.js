import { Octokit } from '@octokit/core'

const octokit = new Octokit({
    auth: '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'
})

const {data} = await octokit.request('GET /repos/{org}/{repo}/issues?labels=agenda', {
    org:"QlimesEth",
    repo:"Test-Repo-1",
  });
const workMeetings = await octokit.request('GET /repos/{org}/{repo}/issues?labels=Working%20Meetings&per_page=1', {
    org: 'QlimesEth',
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
    orgs: 'QlimesEth',
    repo: 'Community',
    issue_number: `${issue_numer}`,
    title: 'NEW OPCWM TEST',
    body: parsed,
    milestone: null,
    state: 'open',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

