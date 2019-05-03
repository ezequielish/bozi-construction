import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server';
import App from '../dist/ssr/app';

const app = express();


app.use(express.static('dist'));
app.use('/', express.static('images'));
app.get('*', (req, res) => {
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={{
        name: 'Ezequiel'
      }}
    >
      <App />
    </StaticRouter>
  )
  res.write(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" /> 
          <title>Bozi Construcciones y Reformas</title>
          <link rel="stylesheet" href="/css/app.css">
        </head>
        <body>
          <div id="app">${html}</div>
          <!-- <script src="http://localhost:9000/app.js"></script> -->
          <script src="/bundle.js"></script>
        </body>
      </html>
    `)
  res.end();
})

console.log("Iniciando servidor...")
app.listen(3000, () => {

  console.log("Servidor iniciado...")
})