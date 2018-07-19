import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from '../theme/components/MyCardGroupStyle';


class MyCardGroupStyle extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            classes: '',
            children: typeof props.children !== 'undefined' ? props.children : '',
            className: typeof props.className !== 'undefined' ? props.className : '',
            title: typeof props.title !== 'undefined' ? props.title : '',
        };
    }

    render(){
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.cssTitleCard}>
                    <Typography>
                        <b>
                            {this.state.title}
                        </b>
                    </Typography>
                </div>
                <div className={this.props.classes.cssContentCard}>
                    {this.state.children}
                </div>
            </div>
        );
    }
}

MyCardGroupStyle.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
};

export default withStyles(styles)(MyCardGroupStyle);
