## Get the latest commit for a given Github repo and URL
### How to use?
This program requires setting Github repo and branch information through enviornment variables.
Use the environment variable GITHUB_URL for repo URL and GITHUB_BRANCH for branch name.

#### Option 1: Use docker image
The pre-built docker image has already been uploaded to the DockerHub. Run the following command start the container.

```bash
docker run -p 3000:3000 -e GITHUB_BRANCH='4.2-branch' -e GITHUB_URL='https://github.com/WordPress/WordPress.git' -d kamalhussain/repoinfo:1.0
```
Point the browser to http://localhost:3000/repo

#### Option 2: Run nodejs program manually
Follow these instructions to standup the nodejs program:
* Clone the repository
* cd to app directory
* Run "npm install"
* Set environment variables GITHUB_URL and GITHUB_BRANCH (On Linux, use "export GITHUB_URL="..")
* Run "npm start"

Point the browser to http://localhost:3000/repo
