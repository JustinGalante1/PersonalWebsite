import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    ...theme.spreadThis
})

class about extends Component {

    
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { classes }= this.props;
        return (
            <Typography variant="h2" className={classes.bluetext}>
                HELLO THERE
            </Typography>
        );
    }
}

about.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(about);
