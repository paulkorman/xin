import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paypalbutton:{


    }
});


class PayPal extends Component {

    render(){

        let env = 'production';
        let style = {
            label: 'paypal',
            size:  'responsive',    // small | medium | large | responsive
            shape: 'rect',     // pill | rect
            color: 'blue',     // gold | blue | silver | black
            tagline: false,
        };

        let client = {
            //...
            sandbox:    'AYr39y4nRwTSHg4Ghw16Pn0ZG6uRxXI3lmB2fOnZtSrTE2Mai4l3DUjJsImEYtcSbPtOxDydAe4mJM5f',
            production: 'ARKlWtctQiFMMvnfUHRPjdSBnixcFdWXkvPcl4m9Dg3q6pG-iPutRYsVSQRRt9EdSP8V4n2p1ngoBW4v'
        };

        let payment = (data, actions) => {
            //...
            const amount = 0.01;
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: {
                                total: amount,
                                currency: 'CAD'
                            }
                        }
                    ]
                }
            });
        };

        let onAuthorize = (data, actions) => {

        };

        let PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

        return (
            <div className={this.props.classes.paypalbutton}>
                <PayPalButton
                    env={env}
                    style={style}
                    client={client}
                    payment={payment}
                    commit={true}
                    onAuthorize={onAuthorize} />
            </div>
        );
    }
}

export default withStyles(styles)(PayPal);
