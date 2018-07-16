import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Comment from './Comment'


class Post extends Component {

    componentDidMount = () => {
        if (this.props.match.params.id) {
            this.props.getPost(this.props.match.params.id)
            this.props.getComments(this.props.match.params.id)
        }
    }

    render() {
        if (this.props.post) {

            //console.log(this.props)
            console.log('TEST Post commentcount',this.props.post.commentIds,typeof(this.props.post.commentIds),this.props.post.commentIds.length)

            const testArray = ['abcd','n1n1n2','zzzy']
            console.log('TESTARRAY',testArray,typeof(testArray),testArray.length)
            testArray.map(m => console.log(m))

            return (
                <div className="post">
                    <div className="post-title">
                        <Link to={'/post/' + this.props.id}>
                            {this.props.post.title}
                        </Link>
                    </div>

                    <div className="post-details">
                        <p>{this.props.post.body}</p>
                        <p>by {this.props.post.author}</p>
                        <p>Votes: {this.props.post.voteScore}</p>
                        <p>Comments: {this.props.post.commentCount} </p>
                    </div>
                    
                    
                        
                    //    for (i of this.props.post.comments) {
                    //    console.log(i)
                    //}
                    }
                    
                    { /* //  this.props.post.comments.length > 0 &&
                        
                        this.props.match.params.id &&
                        this.props.post.comments.map(commentId => (
                            <Comment key={commentId} id={commentId}/>
                        ))
                    */}
                </div>

            )
        }
        else {
            return (
                <div className="post">
                    <font size="+1" color="blue">Loading</font>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const post_id = ownProps.id ? ownProps.id : ownProps.match.params.id
    return {
        post: state.posts[post_id],
        //postComments: state.posts[post_id].comments,
        // comments: ownProps.match.params.id ? state.comments : null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => dispatch(actionCreators.getPost(id)),
        getComments: (id) => dispatch(actionCreators.getComments(id))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

