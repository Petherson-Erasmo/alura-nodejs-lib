const fetch = (...args) =>
  import('node-fetch')
    .then(({ default: fetch }) =>
      fetch(...args))

const chalk = require('chalk')

function handleErro (erro) {
  throw new Error(
    chalk.red(erro.message))
}

async function checkStatus (arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const response = await fetch(url)
          return `${response.status} - ${response.statusText}`
        }))
    return arrayStatus
  } catch (erro) {
    handleErro(erro)
  }
}

function generateURLsArray (arrayLinks) {
  return arrayLinks
    .map(objectLink => Object
      .values(objectLink)
      .join())
}

async function validateURLs (arrayLinks) {
  const links = generateURLsArray(arrayLinks)
  const statusLinks = await checkStatus(links)
  const results = arrayLinks.map((obj, index) => ({
    /* spread operator */
    ...obj,
    statusCode: statusLinks[index]
  }))
  return results
}

module.exports = validateURLs
