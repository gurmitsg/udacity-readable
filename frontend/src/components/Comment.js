import React, { Component } from 'react';
import { connect } from 'react-redux';
import Vote from './Vote'
import * as actionCreators from '../store/actions'

import Modal from 'react-modal'

import FAEdit from 'react-icons/lib/ti/edit';
import FADelete from 'react-icons/lib/ti/delete';

import CommentForm from './CommentForm'


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


class Comment extends Component {
    state = {
        modalIsOpen: false,
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000fff';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    voteUpHandler = () => {
        this.props.updateVote(this.props.comment.id, 'upVote')
    }

    voteDownHandler = () => {
        this.props.updateVote(this.props.comment.id, 'downVote')
    }


    render() {
        return (
            <div className="post-comment">

                <button name="edit-post" className="edit-button" onClick={() => this.openModal()}>
                    <FAEdit />
                </button>
                <button name="delete-post" className="delete-button" onClick={() => this.props.deleteComment(this.props.comment.id,this.props.comment.parentId)}>
                    <FADelete />
                </button>


                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Comment Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Edit comment</h2>
                    <button onClick={this.closeModal}>close</button>
                    <CommentForm
                        saveComment={this.props.updateComment}
                        closeForm={this.closeModal}
                        id={this.props.comment.id}
                        body={this.props.comment.body}
                        author={this.props.comment.author}
                        parentId={this.props.comment.parentId}
                    />
                </Modal>


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
        updateVote: (id, option) => dispatch(actionCreators.updateCommentVote(id, option)),
        updateComment: (id, comment) => dispatch(actionCreators.updateComment(id, comment)),
        deleteComment: (id,parentId) => dispatch(actionCreators.deleteComment(id,parentId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment);

