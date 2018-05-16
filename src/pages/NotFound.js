import React from "react";
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { compose } from 'recompose';

class NotFound extends React.Component {
  componentDidMount () {
    document.title = "Page Not Found";
  }
  render () {
    return (
      <div>
        <Typography variant="display2" gutterBottom>
          404 Not Found
        </Typography>
      </div>
    );
  }
};
export default compose(withTheme())(NotFound);
