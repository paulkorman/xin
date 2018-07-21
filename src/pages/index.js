import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter,Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import PromotionCode from '../pages/PromotionCode';
import CreditCardPayment from '../pages/CreditCardPayment';
import ConfirmationPage from '../pages/ConfirmationPage';

import styles from '../theme/pages/Index';

class Index extends React.Component {

  render() {

    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <HashRouter>
            <div>
                <Route exact path="/" component={PromotionCode}></Route>
                <Route exact path="/credit-card-payment" component={CreditCardPayment}></Route>
                <Route exact path="/confirmation-page" component={ConfirmationPage}></Route>
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
