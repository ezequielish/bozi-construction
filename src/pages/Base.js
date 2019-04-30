import React from 'react';

function Base(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />        
        <title>{props.title}</title>
        <link rel="stylesheet" href={props.css} />
      </head>
      <body>
        <section id="app">
          {props.children}
        </section>
        <script src={props.js}></script>
      </body>
    </html>
  )
}

export default Base;