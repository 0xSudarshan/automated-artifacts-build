import express, { json } from 'express'
import { Octokit } from '@octokit/core'


const app = express()
const octokit = new Octokit({
    auth: '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'
})

const { data } = await octokit.request('GET /repos/{owner}/{repo}/issues?labels=agenda', {
    owner: '0xSudarshan',
    repo: '0xnode',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

const workMeetings = await octokit.request('GET /repos/{owner}/{repo}/issues?labels=Working%20Meetings&per_page=1', {
    owner: '0xSudarshan',
    repo: 'automated-artifacts-buidl',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
})
let body = workMeetings.data[0].body
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


setTimeout(() => {
    octokit.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: '0xSudarshan',
        repo: 'automated-artifacts-buidl',
        issue_number: '6',
        title: 'NEW OPCWM TEST',
        body: parsed,
        milestone: null,
        state: 'open',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

}, 100)






app.listen(5000, () => {
    console.log("running at 3000...")
})