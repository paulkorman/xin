import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from '../theme/components/MyAppBar';

function ShowBack(link) {
    if(link!==''){
        return (
            <Button href={link} style={{padding: 0, minWidth: 'auto', minHeight: 'auto'}}>
                <ChevronLeftIcon />
            </Button>
        );
    }
}

function ShowClose(link) {
    if(link!==''){
        return (
            <Button href={link} style={{padding: 0, minWidth: 'auto', minHeight: 'auto'}}>
                <CloseIcon />
            </Button>
        );
    }
}

class MyAppBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : 'false',
            classes: typeof props.classes !== 'undefined' ? props.classes : '',
            title: typeof props.title !== 'undefined' ? props.title : '',
            linkback: typeof props.linkback !== 'undefined' ? props.linkback : '',
            linkclose: typeof props.linkclose !== 'undefined' ? props.linkclose : '',
        };
    }



    render(){
        return (
            <div>
                <AppBar position="fixed" className={this.props.classes.appbar}>
                    <Toolbar>
                        <Grid container spacing={0}  >
                            <Grid item xs={4} className={this.props.classes.leftCol}>
                                {ShowBack(this.state.linkback)}
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={this.props.classes.title}>
                                    {this.state.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} className={this.props.classes.rightCol}>
                                {ShowClose(this.state.linkclose)}
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MyAppBar.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
};

export default withStyles(styles)(MyAppBar);
