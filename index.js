const chalk = require('chalk');
const fs = require('fs')

function handleErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'))
}

/* code async */
async function getFile(filePath) {
  const encoding = 'utf-8'
  try {
    const text = await fs.promises.readFile(filePath, encoding)
    console.log(chalk.green(text))
  } catch (erro) {
    handleErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
}

/* linked list */
// function getFile (filePath) {
//   const encoding = 'utf-8'
//   fs.promises
//     .readFile(filePath, encoding)
//     .then((data) => chalk.green(console.log(data)))
//     .catch((erro) => handleErro(erro))
// }

/* code async */
// function getFile(filePath) {
//   const encoding = 'utf-8'
//   fs.readFile(filePath, encoding, (erro, data) => {
//     if (erro) {
//       handleErro(erro)
//     } else {
//       console.log(chalk.green(data))
//     }
//   })
// }

getFile('./arquivos/texto1.md')