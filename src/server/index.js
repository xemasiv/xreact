import express from 'express';
import React from 'react';
import cors from 'cors';
import compression from 'compression';
import serialize from 'serialize-javascript';
import session from 'express-session';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(compression({ level: 9 }));

app.use(session({
  secret: 'Bjq3DojKaYvj',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(express.static('dist/browser', {
  maxage: 43200000
}));

app.use('*', (req, res) => {
  console.log('session:', req.session);
  const data = { name: 'xemasiv' };
  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <title>xreact</title>
        <link rel="stylesheet" href="/fonts/roboto.css">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
      </head>
      <body>
        <div id="root"></div>
        <script src="/main.index.js" defer></script>
        <script>window.__DATA__ = ${serialize(data)}</script>
      </body>
    </html>
  `);
});

app.listen(80);
/*
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import App from '../App.js';
const theme = createMuiTheme({ palette: { type: 'light' } });
app.use('/asdasd', (req, res) => {
  const data = { name: 'xemasiv' };
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <App data={data}/>
      </MuiThemeProvider>
    </JssProvider>
  );
  const css = sheetsRegistry.toString();
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>xreact</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
        <script src="/browser.index.js" defer></script>
        <script>window.__DATA__ = ${serialize(data)}</script>
      </body>
    </html>
  `);
});*/
