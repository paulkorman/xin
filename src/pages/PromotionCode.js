
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../components/withRoot';
import MyAppBar from '../components/MyAppBar';
import MyCardGroupStyle from '../components/MyCardGroupStyle';

import styles from '../theme/pages/PromotionCode';

import ProdPhoto from '../img/woman.jpg';

class PromotionCode extends Component {

    componentDidMount() {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#insertion-point-jss'),
        );
    }

    render() {
        return (
            <div className={this.props.classes.wrapContent}>
                <MyAppBar
                    title="Order process"
                    linkclose="/"
                />
                <div className={this.props.classes.myCard}>
                    <img src={ProdPhoto} alt="back and neck massager"/>
                    <div>
                        <Typography variant="subheading" color="inherit">
                            Relax yourself
                        </Typography>
                        <Typography variant="caption" color="inherit" style={{textTransform: 'uppercase', fontWeight: 500}}>
                            Mini 15 mins Back and Neck Massage
                        </Typography>
                    </div>
                </div>
                <div className={this.props.classes.myCardFooter}>
                    <Grid container spacing={0} style={{alignItems: 'center'}} className={this.props.classes.marginBottom} >
                        <Grid item xs={6} >
                            <Typography className={this.props.classes.caption}>
                                Price
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={this.props.classes.value}>
                                $3.99
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{alignItems: 'flex-end'}}>
                        <Grid item xs={6}  >
                            <FormControl style={{width: '8rem'}}>
                                <Typography className={this.props.classes.caption}>
                                    Enter Promotion Code
                                </Typography>
                                <Input
                                    classes={{
                                        underline: this.props.classes.cssUnderline,
                                        input: this.props.classes.cssInput
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'right'}}>
                            <Button variant="contained" size="small" color="secondary" className={this.props.classes.myBtn}>
                                Apply
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <MyCardGroupStyle title="Secure Payments">
                    <Grid container spacing={24} style={{alignItems: 'center'}} className={this.props.classes.marginBottom} >
                        <Grid item xs={6} >
                            <a href="/#/credit-card-payment" className={this.props.classes.linkButton}>
                                <Icon className={classNames(this.props.classes.iconFA, 'fa fa-credit-card')} style={{ fontSize: '1.875rem', width: 50 }}/>
                                <Typography className={this.props.classes.linkButtonCaption}>Credit Card</Typography>
                            </a>
                        </Grid>
                        <Grid item xs={6}>
                            <a href="" className={this.props.classes.linkButton}>
                                <Icon className={classNames(this.props.classes.iconFA, 'fab fa-paypal')} style={{ fontSize: '1.875rem', width: 50 }}/>
                                <Typography className={this.props.classes.linkButtonCaption}>Pay Pal</Typography>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{alignItems: 'center'}} >
                        <Grid item xs={3} style={{textAlign: 'center'}}>
                            <Icon className={classNames(this.props.classes.iconFA, 'fab fa-cc-visa')} style={{ fontSize: '3rem', width: 60, color: '#bebebe' }}/>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'center'}}>
                            <Icon className={classNames(this.props.classes.iconFA, 'fab fa-cc-mastercard')} style={{ fontSize: '3rem', width: 60, color: '#bebebe' }}/>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'center'}}>
                            <Icon className={classNames(this.props.classes.iconFA, 'fab fa-cc-amex')} style={{ fontSize: '3rem', width: 60, color: '#bebebe' }}/>
                        </Grid>
                        <Grid item xs={3} style={{textAlign: 'center'}}>
                            <Icon className={classNames(this.props.classes.iconFA, 'fab fa-cc-discover')} style={{ fontSize: '3rem', width: 60, color: '#bebebe' }}/>
                        </Grid>
                    </Grid>
                </MyCardGroupStyle>
            </div>
        );
    }
}

PromotionCode.propTypes = {
    classes: PropTypes.object,
};

export default withRoot(withStyles(styles)(PromotionCode));
