import express from 'express'
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
//   console.log(data)
  for (let i =0 ; i < data.length ; i++){
    console.log(">>",data[i].html_url,data[i].user.login)
  }

  

app.listen(3000,()=>{
    console.log("running at 3000...")
})