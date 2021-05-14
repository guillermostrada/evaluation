const { describe, it } = require('mocha')
const supertest = require('supertest')
const app = require('../index')

describe('GET /iecho?text', function () {
  it('it should has status 200', function (done) {
    supertest(app)
      .get('/iecho?text=test')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
  })
  it('it should retrieve reverse text', function (done) {
    supertest(app)
      .get('/iecho?text=test')
      .expect({ text: 'tset' })
      .end(function (err, res) {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
  })

  it('it should has status 400', function (done) {
    supertest(app)
      .get('/iecho?text=')
      .expect(400)
      .end(function (err, res) {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
  })

  it('it should retrieve an error', function (done) {
    supertest(app)
      .get('/iecho?text=')
      .expect({ error: 'no text' })
      .end(function (err, res) {
        if (err) {
          done(err)
        } else {
          done()
        }
      })
  })
})
