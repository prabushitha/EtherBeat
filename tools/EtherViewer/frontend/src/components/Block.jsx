import React, {Component} from 'react'
import {connect} from "react-redux";
import {updateBlock} from "../actions";

class Block extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.updateBlock(this.props.match.params.num);
    }

    render() {
        console.log("Came Block");
        return (
            <div>
                <h2>Block</h2>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateBlock: (num) => dispatch(updateBlock(num))
});

const mapStateToProps = (state) => ({
    selectedBlock: state.SelectedBlockReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Block);