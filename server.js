const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = true;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  console.log("bateu")
  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  server.get('/:id', (req, res) => {
    const queryParams = { id: req.params.id } 
    console.log(queryParams);
    app.render(req, res, `/${queryParams}`, queryParams)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })


  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})