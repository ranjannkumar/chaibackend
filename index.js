require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  "login": "ranjannkumar",
  "id": 138779138,
  "node_id": "U_kgDOCEWaAg",
  "avatar_url": "https://avatars.githubusercontent.com/u/138779138?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ranjannkumar",
  "html_url": "https://github.com/ranjannkumar",
  "followers_url": "https://api.github.com/users/ranjannkumar/followers",
  "following_url": "https://api.github.com/users/ranjannkumar/following{/other_user}",
  "gists_url": "https://api.github.com/users/ranjannkumar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ranjannkumar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ranjannkumar/subscriptions",
  "organizations_url": "https://api.github.com/users/ranjannkumar/orgs",
  "repos_url": "https://api.github.com/users/ranjannkumar/repos",
  "events_url": "https://api.github.com/users/ranjannkumar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ranjannkumar/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ranjan Kumar",
  "company": "Student at IIT Guwahati",
  "blog": "https://www.iitg.ac.in/",
  "location": "Guwahati,Assam,India",
  "email": null,
  "hireable": null,
  "bio": "programmer | Learner |\r\nThe only way to do great work is to love what you do.",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 4,
  "created_at": "2023-07-06T11:03:45Z",
  "updated_at": "2024-06-16T15:19:30Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('ranjandotcom')
})

app.get('/login',(req,res)=>{
  res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send('<h1>chai aur code</h1>')
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})