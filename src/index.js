import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

const Loading = () => {
  return <CircularProgress color="secondary"/>;
};

import Header from './partials/Header';
const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: () => <Loading/>,
})
const NotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  loading: () => <Loading/>,
});


import { Provider } from './State';

const theme = createMuiTheme({ palette: { type: 'light' } });

const Router = () => {
  return (
    <Provider value={{ name: 'xemasiv' }}>
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

const Themed = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router data={window.__DATA__} />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Themed />, document.querySelector('#root'));
