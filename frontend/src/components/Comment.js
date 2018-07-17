import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vote from './Vote'
import * as actionCreators from '../store/actions'


class Comment extends Component {

    voteUpHandler = () => {
        this.props.updateVote(this.props.comment.id, 'upVote')
    }

    voteDownHandler = () => {
        this.props.updateVote(this.props.comment.id, 'downVote')
    }


    render() {
        return (
            <div className="post-comment">
                <div className="post-comment-body">{this.props.comment.body}</div>
                <div className="post-comment-author">by {this.props.comment.author}</div>
                <Vote
                    voteScore={this.props.comment.voteScore}
                    voteUp={this.voteUpHandler}
                    voteDown={this.voteDownHandler}
                />
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comment: state.comments[ownProps.id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateVote: (id, option) => dispatch(actionCreators.updateCommentVote(id, option))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment);

