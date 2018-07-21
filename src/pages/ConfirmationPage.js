/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';

import styles from '../theme/pages/ConfirmationPage';

let windowW = window.innerWidth;
let k = 1;
if(windowW <= 414 && windowW > 320){
    k = windowW/320;
}
if(windowW > 414){
    k = 414/320;
}
if(windowW <= 320){
    k=1;
}

class ConfirmationPage extends Component {

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    render() {

        return (
            <div >
                <MyAppBar
                    title="Order process"
                    linkclose="/"
                />

                <Paper className={this.props.classes.myPaper} elevation={0}>

                    <div>
                        <div className={this.props.classes.iconComplete}>
                            <Icon className={classNames(this.props.classes.icon, 'fas fa-check')} style={{ fontSize: k*2.3 + 'rem', width: k*50 }}/>
                        </div>
                        <div >
                            <Typography variant="subheading" color="inherit" style={{marginBottom: k*18, fontSize: k*1 + 'rem'}}>
                                Now You can enjoy Massager
                            </Typography>
                            <Typography variant="subheading" style={{fontWeight: 400, fontSize: k*1 + 'rem', color: '#939393', marginBottom: k*60}}>
                                Plug the massager and Press start button on Massager!
                            </Typography>
                            <Typography variant="body1" style={{fontWeight: 400, fontSize: k*0.875 + 'rem', color: '#939393'}}>
                                The expire time is 2018/01/22  22:17
                            </Typography>
                        </div>
                    </div>

                </Paper>
            </div>
        );
    }
}

ConfirmationPage.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(ConfirmationPage));
