import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import Post from './Post'
import PostForm from './PostForm'

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
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }


    componentDidMount = () => {
        this.props.getPosts()

    }



    render() {
        return (
            <div className="post-list">
                {/*} <AddPerson personAdded={this.props.addPerson} /> */}
                <button onClick={this.openModal}>Add Post</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Post Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Add post</h2>
                    <button onClick={this.closeModal}>close</button>
                    <PostForm email='testing@test.com' closeForm={this.closeModal} />
                </Modal>


                {Object.keys(this.props.posts).map(post_id => (
                    <Post
                        key={post_id} id={post_id}
                    />
                ))}

            </div>
        );
    }
}

// clicked={() => this.props.delPerson(person.id)}


const mapStateToProps = state => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actionCreators.getPosts()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);