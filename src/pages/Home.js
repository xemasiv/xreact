import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { Consumer } from '../State';

class Home extends React.Component {
  componentDidMount () {
    document.title = "Home";
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <Typography variant="display2" gutterBottom>
          Welcome
        </Typography>
        <Button variant="raised" color="primary">
          Hello!
        </Button>
        <Consumer>
          {(state) => {
            console.log('state:', state);
            return <Typography>{state.name}</Typography>;
          }}
        </Consumer>
      </div>
    );
  }
};
export default compose(withTheme())(Home);
