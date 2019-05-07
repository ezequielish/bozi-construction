import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import React from 'react';
import { config } from '../config/index'
import cors from 'cors';
import { transporter } from './transporter'
import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server';
import App from '../dist/ssr/app';
import cacheResponse from "../utils/responseCache";
import dnsPrefetchControl from 'dns-prefetch-control';
import frameguard from 'frameguard';
import { SIXTY_MINUTES_IN_SECONDS } from "../utils/time";
const app = express();

// const corsOptions = { origin: "http://localhost:3000/" };
// app.use(cors(corsOptions));

// app.use(helmet());;

app.disable('x-powered-by');
app.use(dnsPrefetchControl({ allow: true }))
app.use(frameguard({ action: 'deny' }))
//midleware 
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use('/', express.static('images'));
app.get('*', (req, res) => {
  cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={{
        name: 'Bozi Construncciones y Reformas'
      }}
    >
      <App />
    </StaticRouter>
  )
  res.write(`
      <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" type="image/png" href="/img/favicon.png" /> 
          <title>Bozi Construcciones y Reformas</title>
          <link rel="stylesheet" href="/css/app.a0a63ee1825dde494c43.css">
        </head>
        <body>
          <div id="app">${html}</div>
          <script src="/modules.js"></script>
          <script src="/bundle.a0a63ee1825dde494c43.js"></script>

        </body>
      </html>
    `)
  res.end();
})

app.post('/contactar', (req, res) => {
  const { nameClient, emailClient, subject, messageClient } = req.body.data
  if (messageClient == "" || typeof messageClient == 'string') {

    let transp = transporter;
    let mailOptions = {
      // from: emailClient, // TODO: email sender
      to: config.email, // TODO: email receiver
      subject: subject,
      text: `Nombre Cliente: ${nameClient} \n Email Cliente: ${emailClient} \n Asunto: ${subject} \n Mensaje: ${messageClient}`
    };
    transp.sendMail(mailOptions, (err, data) => {
      if (err) {
        return res.status(500).send({ msg: "Ha ocurrido un error al enviar el email." })
      }
      return res.status(200).send({ msg: "El  email se envio con éxito" })
    });
  }

})


console.log("Iniciando servidor...")
const port = config.dev ? 3000 : process.env.PORT;


const server = app.listen(port, () => {
  console.log(`Se ha iniciado el servidor en el puerto ${server.address().port}`)
});


