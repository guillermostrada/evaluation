
const express = require('express')
const app = express()
const port = 3000

if (!module.parent) { app.listen(port) }
/**
 * Recibe una palabra y la devuelve escrita al revés
 *
 * @param text
 *
 */
app.get('/iecho', async (req, res) => {
  const str = req.query.text
  if (!str || str === '') {
    res.status(400)
    res.json({ error: 'no text' })
  }
  const reversed = await revStr(str);
  (str === reversed) ? res.setHeader('Palindrome', 'true') : res.setHeader('Palindrome', 'false')
  res.json({ text: reversed })
})

function revStr (text) {
  return text.split('').reverse().join('')
}

module.exports = app
