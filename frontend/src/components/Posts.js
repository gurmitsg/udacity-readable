import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import * as actionCreators from '../store/actions'
import Post from './Post'
import PostForm from './PostForm'

import FAAdd from 'react-icons/lib/go/diff-added';
import Modal from 'react-modal'


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

// what else to set to ??
Modal.setAppElement('#root')

class Posts extends Component {
    state = {
        modalIsOpen: false
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


    componentDidMount = () => {
        this.props.getCategories()
        this.props.getPosts()
    }



    render() {

        return (
            <div className="post-list">
                <button name="add-post" className="edit-button" onClick={this.openModal}>
                    <FAAdd />
                </button>

                {(this.props.categories.length !== 0) &&
                    Object.keys(this.props.categories).map(category => (
                        <div key={category} className="categories">
                            <Link to={'/' + category}>
                                {category}
                            </Link>
                        </div>
                    ))
                }


                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Post Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Add post</h2>
                    <button onClick={this.closeModal}>close</button>
                    <PostForm
                        savePost={this.props.addPost}
                        closeForm={this.closeModal}
                        categories={this.props.categories}
                    />
                </Modal>

                {
                    (this.props.posts.length !== 0) &&
                    Object.keys(this.props.posts).map(post_id => (
                        <Post
                            key={post_id} id={post_id}
                        />
                    ))
                }

            </div >
        );
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts,
        categories: state.categories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(actionCreators.getCategories()),
        getPosts: () => dispatch(actionCreators.getPosts()),
        addPost: (post) => dispatch(actionCreators.addPost(post)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))