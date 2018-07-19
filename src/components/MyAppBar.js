import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import styles from '../theme/components/MyAppBar';


class MyAppBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: typeof props.open !== 'undefined' ? props.open : 'false',
            classes: typeof props.classes !== 'undefined' ? props.classes : '',
            title: typeof props.title !== 'undefined' ? props.title : '',
        };
    }

    openMenu(){
        document.getElementById('menu').classList.add('myMenuOpen');
    }

    render(){
        return (
            <div>
                <AppBar position="fixed" className={this.props.classes.appbar}>
                    <Toolbar>
                        <Grid container spacing={0}  >
                            <Grid item xs={4} className={this.props.classes.leftCol}>
                                <ChevronLeftIcon />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography className={this.props.classes.title}>
                                    {this.state.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} className={this.props.classes.rightCol}>
                                <MenuIcon className={this.props.classes.icon} />
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
