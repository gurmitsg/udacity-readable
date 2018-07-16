import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions'

import Post from './Post'
//import Person from '../components/Person/Person';
//import AddPerson from '../components/AddPerson/AddPerson';



class Posts extends Component {

    componentDidMount = () => {
        this.props.getPosts()
        
    }

    render() {
        return (
            <div className="post-list">
                {/*} <AddPerson personAdded={this.props.addPerson} /> */}
                {console.log(this.props.posts)}
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