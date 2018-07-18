import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Comment from './Comment'
import Vote from './Vote'


class Post extends Component {

    componentDidMount = () => {
        if (this.props.match.params.id) {
            this.props.getPost(this.props.match.params.id)
            this.props.getComments(this.props.match.params.id)
        }
    }


    //TODO:  dynamic single handler for voteUp/Down
    voteUpHandler = () => {
        const postId = this.props.match.params.id ? this.props.match.params.id : this.props.id
        this.props.updateVote(postId, 'upVote')
    }

    voteDownHandler = () => {
        const postId = this.props.match.params.id ? this.props.match.params.id : this.props.id
        this.props.updateVote(postId, 'downVote')
    }

    render() {
        if (this.props.post) {

            return (
                <div className="post">

                    {this.props.id
                        ?
                        <div className="post-title">
                            <Link to={'/' + this.props.post.category + '/' + this.props.id}>
                                {this.props.post.title}
                            </Link>
                        </div>
                        :
                        <div className="post-title">
                            {this.props.post.title}
                        </div>
                    }

                    <div className="post-details">
                        <p>{this.props.post.body}</p>
                        <p>by {this.props.post.author}</p>
                        <Vote
                            voteScore={this.props.post.voteScore}
                            voteUp={this.voteUpHandler}
                            voteDown={this.voteDownHandler}
                        />

                        <p>{this.props.post.commentCount} comments</p>

                        {this.props.match.params.id && this.props.post.commentIds &&
                            this.props.post.commentIds.map(commentId => (
                                <Comment key={commentId} id={commentId} />
                            ))}

                    </div>
                </div>

            )
        }
        else {
            return (
                <div className="post">
                    <font size="+1" color="blue">Loading...</font>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const post_id = ownProps.id ? ownProps.id : ownProps.match.params.id
    return {
        post: state.posts[post_id],
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(actionCreators.getPost(id)),
        getComments: (id) => dispatch(actionCreators.getComments(id)),
        updateVote: (id, option) => dispatch(actionCreators.updatePostVote(id, option))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

