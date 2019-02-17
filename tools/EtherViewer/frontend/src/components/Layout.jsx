import React, {Component} from 'react'
import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    footer: {
        top: 'auto',
        bottom: 0,
    }
});

class Layout extends Component {
    constructor(props) {
        super(props);
        this.classes = props;
    }

    render() {
        const classes = this.classes;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            EtherBeat Viewer
                        </Typography>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        )
    }
}
/*
const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Layout));
*/
export default withStyles(styles)(Layout);