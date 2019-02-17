import React, {Component} from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref="dashboard_view">
                <h2>Hello World</h2>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {

};

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);