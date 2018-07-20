import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import * as actionCreators from '../store/actions'
import Post from './Post'
import PostForm from './PostForm'

import FAAdd from 'react-icons/lib/go/diff-added';
import FASort from 'react-icons/lib/fa/sort-numeric-desc';

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
        modalIsOpen: false,
        sorting: false,
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

        if (this.props.match.params.category) {
            this.props.getPostsByCat(this.props.match.params.category)
        }
        else {
            this.props.getPosts()
        }
    }

    sortHandler = () => {
        this.setState({ sorting: !this.state.sorting })
        this.props.getPosts()
    }

    getAllPosts = () => {

        if (!this.state.sorting) {
            return Object.keys(this.props.posts)
        }
        else {
            const allPosts = Object.keys(this.props.posts).reduce((acc, cur) => {
                acc.push([cur, this.props.posts[cur].voteScore])
                return acc
            }, [])

            allPosts.sort(function (b, a) {
                return a[1] - b[1];
            });

            const postKeys = allPosts.map(p => p[0])
            return postKeys
        }
    }

    componentDidUpdate = (prevProps) => {

        if ((!prevProps.match.params.category && this.props.match.params.category) ||
            (prevProps.match.params.category !== this.props.match.params.category)) {

            this.props.getPostsByCat(this.props.match.params.category)
        }
    }

    render() {

        return (
            <div className="post-list">
                {(!this.props.match.params.category) &&
                    <button name="add-post" className="edit-button" onClick={this.openModal}>
                        <FAAdd />
                    </button>
                }

                {(!this.props.match.params.category && !this.state.sorting) &&
                    <button name="sort-post" className="sort-button sort-button-off" onClick={this.sortHandler}>
                        <FASort />
                    </button>
                }
                {(!this.props.match.params.category && this.state.sorting) &&
                    <button name="sort-post" className="sort-button sort-button-on" onClick={this.sortHandler}>
                        <FASort />
                    </button>
                }


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
                    this.getAllPosts().map(post_id => (
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
        getPostsByCat: (category) => dispatch(actionCreators.getPostsByCat(category)),
        addPost: (post) => dispatch(actionCreators.addPost(post)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))