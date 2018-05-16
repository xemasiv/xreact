import React from 'react';
import { hydrate } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import App from '../App.js';

const theme = createMuiTheme({ palette: { type: 'light' } });

class Main extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  render() {
    return <App data={window.__DATA__} {...this.props} />
  }
}

hydrate(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.querySelector('#root'),
);
