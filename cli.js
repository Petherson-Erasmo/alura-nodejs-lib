const chalk = require('chalk')
const getFile = require('./index')
const getPath = process.argv

async function processText (filePath) {
  const result = await getFile(filePath[2])
  console.log(chalk.yellow('lista de links'), result)
}
processText(getPath)
