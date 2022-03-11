const chalk = require('chalk')
const getFile = require('./index')
const getPath = process.argv
const validateURLs = require('./http-validation')

async function processText (filePath) {
  const result = await getFile(filePath[2])
  if (getPath[3] === 'validar') {
    console.log(
      chalk.blue('Links Validados'),
      await validateURLs(result))
  } else {
    console.log(
      chalk.yellow('Lista de links'),
      result)
  }
}
processText(getPath)
