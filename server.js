import express, { json } from 'express'
import { Octokit } from '@octokit/core'


const app = express()
const octokit = new Octokit({
    auth:'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'
  })
  
//   const {data} =  await octokit.request('GET /repos/{owner}/{repo}/issues?labels=agenda', {
//     owner: '0xSudarshan',
//     repo: '0xnode',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })

// const workMeetings =  await octokit.request('GET /repos/{owner}/{repo}/issues?labels=Working%20Meetings&per_page=1', {
//     owner: '0xSudarshan',
//     repo: 'automated-artifacts-buidl',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })
//   let bodys  = workMeetings.data[0].body
//   console.log(JSON.stringify(body))
//   for (let i =0 ; i < data.length ; i++){
//     let url = data[i].html_url
//     let author = data[i].user.login
//     let startIndex  = parseInt(JSON.stringify(body.indexOf('\r\n| -- | -- | -- |\r\n'))) 
//     console.log(startIndex)
//     let lastIndex  = startIndex+19
//     console.log(lastIndex)
//     let json_text = JSON.stringify(body.substring(0, lastIndex+1 ) + `| ${url} | ${author} |\r\n` + body.substring(lastIndex+1, body.length))
//     body  = JSON.parse(json_text)
//     }
    // console.log(JSON.stringify(bodys))
    // let template =  JSON.stringify(bodys)
    console.log("------------------------------------------------------------------")
    console.log("------------------------------------------------------------------")
    console.log("------------------------------------------------------------------")
    console.log("------------------------------------------------------------------")
    // console.log(template)
    let d = "degen\r\nnfts\r\ndelphi\r\nmater labs"
    let c  = "\"degen\\r\\nnfts\\r\\ndelphi\\r\\nmater labs\""
    let b =  JSON.parse(c);
    let e = JSON.stringify(JSON.stringify(d))
    let parsed   = JSON.parse(JSON.parse(e))
    // console.log("A>>",typeof(a),a)
    console.log("B>>",typeof(b),b)
    console.log("E>>",typeof(e),e)
    console.log("PARSED>>",typeof(parsed),parsed)


    // let template = "hi\n\rhere";


setTimeout(()=>{
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

},100)

  
  

  

app.listen(5000,()=>{
    console.log("running at 3000...")
})