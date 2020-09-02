import React, { Component } from 'react'
import PropTypes from 'prop-types';

//Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

//Images
import Image from '../images/bg5.jpg';

const styles = (theme) => ({
    ...theme.spreadThis
  })

class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        const { classes }= this.props;
        return (
            <React.Fragment>
                <div className="bgcontainer">
                    <Grid className={classes.form}>
                    <Grid item sm ={12} className={classes.foreground}>
                        <Typography variant="h2" className={classes.hometitle}>
                            I'm Justin Nguyen-Galante.
                        </Typography>
                        <Typography variant="h5" className={classes.whitetext}>
                            I am a Software Engineer aspiring to begin my career
                        </Typography>
                    </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(home);
