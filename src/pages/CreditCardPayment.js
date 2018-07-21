/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import NumberFormat from 'react-number-format';

import styles from '../theme/pages/CreditCardPayment';


function CrediCardInputFormat(props) {

    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            format="#### #### #### ####"
            mask="X"
        />
    );
}

CrediCardInputFormat.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

function ExpiryDateInputFormat(props) {

    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            ref={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            format="## / ##"
            mask="X"
        />
    );
}

ExpiryDateInputFormat.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};


class CreditCardPayment extends Component {

    state = {
        open: true,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    render() {

        const { cardformat, dateformat } = this.state;

        return (
            <div >
                <MyAppBar
                    title="Order process"
                    linkback="/"
                    linkclose="/"
                />

                <Paper className={this.props.classes.myPaper} elevation={0}>
                    <Grid container spacing={24} style={{alignItems: 'center', marginBottom: 40}} >
                        <Grid item xs={6} >
                            <div href="" className={this.props.classes.linkButtonActive}>
                                <Icon className={classNames(this.props.classes.iconFA, 'fa fa-credit-card')} style={{ fontSize: '1.875rem', width: 50 }}/>
                                <Typography className={this.props.classes.linkButtonCaption}>Credit Card</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="" className={this.props.classes.linkButton}>
                                <Icon className={classNames(this.props.classes.iconFA, 'fab fa-paypal')} style={{ fontSize: '1.875rem', width: 50 }}/>
                                <Typography className={this.props.classes.linkButtonCaption}>Pay Pal</Typography>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} style={{alignItems: 'center'}} className={this.props.classes.marginBottom} >
                        <Grid item xs={6} >
                            <FormControl fullWidth={true}>
                                <Typography className={this.props.classes.caption}>
                                    First name
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth={true}>
                                <Typography className={this.props.classes.caption}>
                                    Last name
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} style={{alignItems: 'center'}} className={this.props.classes.marginBottom} >
                        <Grid item xs={12} >
                            <FormControl fullWidth={true}>
                                <Typography className={this.props.classes.caption}>
                                    Card number
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}
                                    value={cardformat}
                                    onChange={this.handleChange('cardformat')}
                                    inputComponent={CrediCardInputFormat}
                                    placeholder="0000 0000 0000 0000"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} style={{alignItems: 'center', marginBottom: 20}} >
                        <Grid item xs={6} >
                            <FormControl fullWidth={true}>
                                <Typography className={this.props.classes.caption}>
                                    Expiry date
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}
                                    value={dateformat}
                                    onChange={this.handleChange('dateformat')}
                                    inputComponent={ExpiryDateInputFormat}
                                    placeholder="MM / YY"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth={true}>
                                <Typography className={this.props.classes.caption}>
                                    CVV CODE
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}

                                    placeholder="•••"
                                    inputProps={{maxLength: '3'}}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} style={{alignItems: 'center', marginBottom: 40}} className={this.props.classes.marginBottom} >
                        <Grid item xs={6} >
                            <Typography variant="body1" style={{fontWeight: 500}}>
                                Total:&nbsp;&nbsp;&nbsp;<b>$3.99</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'right'}}>
                            <Button href="/#/confirmation-page" variant="contained" size="large" color="secondary" className={this.props.classes.myBtn}>
                                Pay now
                            </Button>
                        </Grid>
                    </Grid>
                    <Snackbar
                        open={this.state.open}
                        message={<span id="message">Message</span>}
                    />

                </Paper>
            </div>
        );
    }
}

CreditCardPayment.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(CreditCardPayment));
