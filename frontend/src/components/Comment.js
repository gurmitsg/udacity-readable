import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'


class Comment extends Component {

    componentDidMount = () => {
        if (this.props.id) {
            // this.props.getComment(this.props.match.params.id)
        }
    }

    render() {


        console.log(this.props)

        return (
            <div className="post">
                Comment sample
                </div>

        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.comments,
        //postComments: state.posts[post_id].comments,
        // comments: ownProps.match.params.id ? state.comments : null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch(actionCreators.getComments(id))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));

