const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', function (req, res, next) {
  let url = process.env.GITHUB_URL
  let branch = process.env.GITHUB_BRANCH
  let resp_msg = ''

  if (url == undefined || branch == undefined) {
    console.log("GITHUB_URL or GITHUB_BRANCH not defined")
    resp_msg = "GITHUB_URL or GITHUB_BRANCH not defined"
    res.send(resp_msg)

  } else {

    let endpoint = url.replace("https://github.com", "https://api.github.com/repos").replace(/\.git$/, "");
    endpoint = endpoint + '/commits?sha=' + branch

    axios.get(endpoint)
      .then(response => {
        if (response.data.length > 0) {
          console.log(response.data[0].sha);
          let sha = response.data[0].sha

          res.render('repo', {url: url, branch: branch, sha: sha});

        } else {
          resp_msg = "No commits found for found. Github URL: " + url + ". Github branch: " + branch
          res.send(resp_msg)
        }

      })
      .catch(error => {
        console.log(error);
        resp_msg = "Error retrieving commits. Github URL: " + url + ". Github branch: " + branch
        res.send(resp_msg)
      });
  }
  
});

module.exports = router;
