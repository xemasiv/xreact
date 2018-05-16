import express from 'express';
import React from 'react';
import cors from 'cors';
import compression from 'compression';
import serialize from 'serialize-javascript';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(compression());
app.use(express.static('dist/browser'));

app.use('*', (req, res) => {
  const data = { name: 'xemasiv' };
  res.status(200).send(`
    <!doctype html>
    <html>
      <head>
        <title>xreact</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/browser.index.js" defer></script>
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
