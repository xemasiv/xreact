import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';

class App extends React.Component {
  render () {
    return (
      <div>
        <Typography variant="display2" gutterBottom>
          Hello world
        </Typography>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
};
/*
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const Home = () => {
  return <div>Home page!</div>;
};
const Login = () => {
  return <div>Login page!</div>;
};
const NotFound = () => {
  return <div>Page not found!</div>;
};
const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route component={NotFound}/>
    </Switch>
  );
};

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
const MainRoute = () => {
  return (
    <div>
      <Header/>
      <ContentRoute/>
    </div>
  );
};

const Browser = () => {
  return (
    <BrowserRouter>
      <MainRoute/>
    </BrowserRouter>
  );
};

ReactDOM.render(<Browser />, document.getElementById('index'));
*/

export default compose(withTheme())(App);
