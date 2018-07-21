import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Comment from './Comment'
import Vote from './Vote'
import Error from './Error'

import Modal from 'react-modal'
import PostForm from './PostForm'
import CommentForm from './CommentForm'

import FAAdd from 'react-icons/lib/go/diff-added';
import FAEdit from 'react-icons/lib/ti/edit';
import FADelete from 'react-icons/lib/ti/delete';

import ReactLoading from "react-loading";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Post extends Component {

    state = {
        postModalIsOpen: false,
        commentModalIsOpen: false,
    }

    openModal = (modalName) => {
        if (modalName === 'post') {
            this.setState({ postModalIsOpen: true });
        }

        if (modalName === 'comment') {
            this.setState({ commentModalIsOpen: true });
        }
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000fff';
    }

    closeModal = (modalName) => {
        if (modalName === 'post') {
            this.setState({ postModalIsOpen: false });
        }

        if (modalName === 'comment') {
            this.setState({ commentModalIsOpen: false });
        }
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            this.props.getPost(this.props.match.params.id)
            this.props.getComments(this.props.match.params.id)
            this.props.getCategories()
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

            if (this.props.post.status === 'error') {
                return (
                    <Error errno="404" />
                )
            }
            else {
                return (
                    <div className="post-list">

                        <Modal
                            isOpen={this.state.postModalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={() => this.closeModal('post')}
                            style={customStyles}
                            contentLabel="Post Modal"
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>Edit post</h2>
                            <button onClick={() => this.closeModal('post')}>close</button>
                            <PostForm
                                savePost={this.props.updatePost}
                                closeForm={() => this.closeModal('post')}
                                postId={this.props.post.id}
                                title={this.props.post.title}
                                body={this.props.post.body}
                                author={this.props.post.author}
                                category={this.props.post.category}
                                categories={this.props.categories}
                            />
                        </Modal>

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

                        <button name="edit-post" className="edit-button" onClick={() => this.openModal('post')}>
                            <FAEdit />
                        </button>

                        {(!this.props.match.params.id) &&
                            <button name="delete-post" className="delete-button" onClick={() => this.props.deletePost(this.props.post.id)}>
                                <FADelete />
                            </button>
                        }

                        <div>[{this.props.post.category}]</div>

                        <div className="post-body">
                            <p>{this.props.post.body}</p>

                            <div className="post-meta">
                                <p>by {this.props.post.author}</p>
                                <Vote
                                    voteScore={this.props.post.voteScore}
                                    voteUp={this.voteUpHandler}
                                    voteDown={this.voteDownHandler}
                                />
                            </div>

                            <p>{this.props.post.commentCount} comments</p>

                            <Modal
                                isOpen={this.state.commentModalIsOpen}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={() => this.closeModal('comment')}
                                style={customStyles}
                                contentLabel="Comment Modal"
                            >
                                <h2 ref={subtitle => this.subtitle = subtitle}>Add comment</h2>
                                <button onClick={() => this.closeModal('comment')}>close</button>
                                <CommentForm
                                    saveComment={this.props.addComment}
                                    closeForm={() => this.closeModal('comment')}
                                    parentId={this.props.post.id}
                                />
                            </Modal>

                            {(this.props.match.params.id) &&
                                <button name="add-comment" className="edit-button" onClick={() => this.openModal('comment')}>
                                    <FAAdd />
                                </button>
                            }

                            {this.props.match.params.id && this.props.post.commentIds &&
                                this.props.post.commentIds.map(commentId => (
                                    <Comment key={commentId} id={commentId} />
                                ))}

                        </div>
                    </div>
                )
            }
        }
        else {
            return (
                <div className="post">
                    <ReactLoading type="spin" color="#fff" height={"5%"} width={"5%"} />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const post_id = ownProps.id ? ownProps.id : ownProps.match.params.id
    return {
        post: state.posts[post_id],
        categories: state.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actionCreators.getCategories()),
        getPost: (id) => dispatch(actionCreators.getPost(id)),
        updatePost: (id, post) => dispatch(actionCreators.updatePost(id, post)),
        getComments: (id) => dispatch(actionCreators.getComments(id)),
        updateVote: (id, option) => dispatch(actionCreators.updatePostVote(id, option)),
        deletePost: (id) => dispatch(actionCreators.deletePost(id)),
        addComment: (id, comment) => dispatch(actionCreators.addComment(id, comment)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));

