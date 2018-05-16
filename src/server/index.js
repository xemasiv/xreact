import express from 'express';
import React from 'react';
import cors from 'cors';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

import App from '../App.js';

const app = express();
app.use(cors());
app.use(express.static('dist/browser'));
app.use((req, res) => {
  const sheetsRegistry = new SheetsRegistry();
  const theme = createMuiTheme({ palette: { type: 'light' } });
  const generateClassName = createGenerateClassName();
  const data = {
    name: 'xemasiv'
  };
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
        <title>Material-UI</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <style id="jss-server-side">${css}</style>
        <script src="/browser.index.js" defer></script>
        <script>window.__DATA__ = ${serialize(data)}</script>
      </body>
    </html>
  `);
});

app.listen(80);
