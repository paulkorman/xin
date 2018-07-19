import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter,Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import PromotionCode from '../pages/PromotionCode';

import styles from '../theme/pages/Index';

class Index extends React.Component {
  //state = {
  //
  //};
  //
  //handleClose = () => {
  //  this.setState({
  //    open: false,
  //  });
  //};
  //
  //handleClick = () => {
  //  this.setState({
  //    open: true,
  //  });
  //};

  render() {
    const { classes } = this.props;
    //const { open } = this.state;

    return (
        <div className={classes.root}>
          <HashRouter>
            <div>
              <Route exact path="/" component={PromotionCode}></Route>
            </div>
          </HashRouter>
        </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
