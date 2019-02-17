import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from "@material-ui/icons/Search";
import {InputBase, withStyles, Table, TableHead, TableBody, TableRow,TableCell} from "@material-ui/core";
import {fade} from "@material-ui/core/styles/colorManipulator";
import {updateBlocks} from '../actions';

const styles = theme => ({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    }
});

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#dadada',
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.classes = props;
    }
    componentDidMount() {
        this.props.loadBlocks();
    }
    selectBlock(id) {
        this.props.history.push(`/block/${id}`);
    }

    render() {
        const classes = this.classes;

        return (
            <Grid container spacing={24}  justify="space-between" >
                <Grid item xs={12}>
                    <div className={classes.searchIcon} style={{textAlign: 'right'}}>
                        <SearchIcon />
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Search
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Number</CustomTableCell>
                                <CustomTableCell>Hash</CustomTableCell>
                                <CustomTableCell align="right">Difficulty</CustomTableCell>
                                <CustomTableCell align="right">Gas Used</CustomTableCell>
                                <CustomTableCell align="right">Gas Limit</CustomTableCell>
                                <CustomTableCell align="right">Miner</CustomTableCell>
                                <CustomTableCell align="right">Timestamp</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.blockList.map((row) => (
                                <TableRow hover key={row.id} className={classes.row} onClick={(event)=>{this.selectBlock(row.id)}}>
                                    <TableCell component="th" scope="row">{row.id}</TableCell>
                                    <TableCell>{row.hash}</TableCell>
                                    <TableCell align="right">{row.difficulty}</TableCell>
                                    <TableCell align="right">{row.gasUsed}</TableCell>
                                    <TableCell align="right">{row.gasLimit}</TableCell>
                                    <TableCell align="right">{row.beneficiary}</TableCell>
                                    <TableCell align="right">{row.timestamp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadBlocks: () => dispatch(updateBlocks())
});

const mapStateToProps = (state) => ({
    blockList: state.BlockListReducer.blocks
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));