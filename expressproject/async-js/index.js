
// console.log('Hi')
// var user = getUser(1)
// console.log(user)
// var repos = getGitHubRepos(user)
// console.log(repos)
// var commits = getCommits(repos)
// console.log(commits)
// console.log('Bye')


console.log('Hi')

//callback hell

// getUser(1, (user) => {
//   console.log(user)
//   getGitHubRepos(user, (repos) => {
//     console.log(repos)
//     getCommits(repos, (commits) => {
//       console.log(commits)
//     })
//   })
// })

// getUser(1).then((user) => {
//   console.log(user)
//   return getGitHubRepos(user)
// }).then((repos) => {
//   console.log(repos)
//   return getCommits(repos)
// }).then((commits) => {
//   console.log(commits)
// }).catch((err) => {
//   console.log(err)
// })

async function getDetails() {
  var user = await getUser(1)
  console.log(user)
  var respos = await getGitHubRepos(user)
  console.log(respos)
  var commits = await getCommits(respos)
  console.log(commits)
}

getDetails()

// console.log(user)
// var repos = getGitHubRepos(user)
// console.log(repos)
// var commits = getCommits(repos)
// console.log(commits)
console.log('Bye')

function getUser(id, cb) {
 return new Promise((res, rej) => {
    setTimeout(() => {
      //  cb({id: id, name: 'sachin'})
      res({id: id, name: 'sachin'})
    }, 4000)
  })
}

function getGitHubRepos(user, cb) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // cb(['repo-1', 'repo-2', 'repo-3'])
      res(['repo-1', 'repo-2', 'repo-3'])
    }, 4000)
    
  })
}

function getCommits(repos, cb) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // cb(['commit-1', 'commit-2', 'commit-3'])
      res(['commit-1', 'commit-2', 'commit-3'])
    }, 4000)
    
  })
}