import express, { json } from 'express'
import { Octokit } from '@octokit/core'


const app = express()
const octokit = new Octokit({
    auth:'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'
  })
  
  const {data} =  await octokit.request('GET /repos/{owner}/{repo}/issues?labels=agenda', {
    owner: '0xSudarshan',
    repo: '0xnode',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
//   let c= JSON.stringify("| sudarshan | sibi |\r\n")
//   console.log(data)
  let template = "Zoom | -- | -- | -- | Meeting link: https://postman.zoom.us/j/89562933116?pwd=OWlsQ0RrcDY4S1JQU2d2Q2M0aFFlZz09\r\n\r\n[**Meeting accessibility**](https://raw.githubusercontent.com/json-schema-org/community/main/assets/jsonschema-ocwm-slide.jpg):\r\n- We would like to record the meeting for future reference and for those who are not able to attend in person. \r\n- We encourage you to challenge any language or behavior that is harmful or not inclusive during this meeting. \r\n- We look forward to your participation, but please consider... \r\n  - Remaining on mute when not speaking. \r\n  - Use the Zoom meeting raised hand feature to notify you wish to speak. \r\n- [JSON Schema Code of Conduct](https://github.com/json-schema-org/.github/blob/main/CODE_OF_CONDUCT.md)\r\n\r\nAgenda: Compiling!\r\n\r\n| Topic | Owner | Decision/NextStep |\r\n| -- | -- | -- |\r\n| [TOPIC] [IssuePRDiscussion] | [owner] |\r\n\"| sudarshan | sibi |\\r\\n\"| fvsdfvd | cvsdcsd |\r\n| dfvsdf   | [owner] |\r\n| [TOPIC] [IssuePRDiscussion] | [owner] |\r\n<!-- | [TOPIC] [IssuePRDiscussion] | [owner] | -->\r\n\r\nAOB?\r\nIf you want to discuss any other business not on the agenda, please add comments during the meeting.\r\nIf we do not complete the agenda, your discussion item will likely be rolled over to the next call.\r\n\r\nAction items:\r\n- [ ]\r\n\r\nNotes:\r\n\r\nAgenda Items rolling over:\r\n- list\r\n\r\nRecording: [link]\r\n"
  for (let i =0 ; i < data.length ; i++){
    let url = data[i].html_url
    let author = data[i].user.login
    // let addTable = JSON.stringify(`| ${url} | ${author} |\r\n`)
    console.log(template.indexOf('\r\n| -- | -- | -- |\r\n'),template[840], JSON.stringify(template.substring(0, 841) +`| ${url} | ${author} |\r\n` + template.substring(841, template.length)) ) 
    // template.replace('\r\n| -- | -- | -- |\r\n',"laall
    



  }
//   console.log(a)
//   const workMeetings =  await octokit.request('GET /repos/{owner}/{repo}/issues?labels=Working%20Meetings&per_page=1', {
//     owner: '0xSudarshan',
//     repo: 'automated-artifacts-buidl',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })
//   const body  = workMeetings.data[0].body
//   let jsons = JSON.stringify(body)
//   let index = jsons.indexOf(JSON.stringify('| -- | -- | -- |'))
//   let length_of_theSearch = "| -- | -- | -- |".length
//   let add_from = (index+length_of_theSearch)
//   console.log(jsons.slice(0,add_from+4)+'| user  | author |'+  JSON.stringify('\r\n') +jsons.slice(add_from+4))
    // console.log(index)


// const a = await octokit.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
//     owner: '0xSudarshan',
//     repo: 'automated-artifacts-buidl',
//     issue_number: '6',
//     title: 'Found a bug',
//     body: "Zoom Meeting link: https://postman.zoom.us/j/89562933116?pwd=OWlsQ0RrcDY4S1JQU2d2Q2M0aFFlZz09\r\n\r\n[**Meeting accessibility**](https://raw.githubusercontent.com/json-schema-org/community/main/assets/jsonschema-ocwm-slide.jpg):\r\n- We would like to record the meeting for future reference and for those who are not able to attend in person. \r\n- We encourage you to challenge any language or behavior that is harmful or not inclusive during this meeting. \r\n- We look forward to your participation, but please consider... \r\n  - Remaining on mute when not speaking. \r\n  - Use the Zoom meeting raised hand feature to notify you wish to speak. \r\n- [JSON Schema Code of Conduct](https://github.com/json-schema-org/.github/blob/main/CODE_OF_CONDUCT.md)\r\n\r\nAgenda: Compiling!\r\n\r\n| Topic | Owner | Decision/NextStep |\r\n| -- | -- | -- |\r\n| [TOPIC] [IssuePRDiscussion] | [owner] |\r\n\"| sudarshan | sibi |\\r\\n\"| fvsdfvd | cvsdcsd |\r\n| dfvsdf   | [owner] |\r\n| [TOPIC] [IssuePRDiscussion] | [owner] |\r\n<!-- | [TOPIC] [IssuePRDiscussion] | [owner] | -->\r\n\r\nAOB?\r\nIf you want to discuss any other business not on the agenda, please add comments during the meeting.\r\nIf we do not complete the agenda, your discussion item will likely be rolled over to the next call.\r\n\r\nAction items:\r\n- [ ]\r\n\r\nNotes:\r\n\r\nAgenda Items rolling over:\r\n- list\r\n\r\ndude: [link]\r\n",
//     milestone: null,
//     state: 'open',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })
// console.log(a.data.body)
// console.log(a.data.body.search('| -- | -- | -- |'))
  
  

  

app.listen(3000,()=>{
    console.log("running at 3000...")
})