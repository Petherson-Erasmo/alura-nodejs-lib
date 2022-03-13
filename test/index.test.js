const getFile = require('../index')

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('Test the function getFile', () => {
    it('Should be function', () => {
        expect(typeof getFile).toBe('function')
    })

    it('Should return an array of results', async () => {
        const result = await getFile('./test/fixture/data-testText.md')
        expect(result).toEqual(arrayResult)
    })

    it('Should return the message "não há links"', async () => {
        const result = await getFile('./test/fixture/data-testWithoutLink.md')
        expect(result).toBe('não há links')
    })

    it('Should throw new error', async () => {
        await expect(getFile('./test/fixture/'))
            .rejects
            .toThrow(/não há arquivo no caminho/)
    })
})
