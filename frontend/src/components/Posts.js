import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as Action from '../store/actions'
import Post from './Post'

//import Person from '../components/Person/Person';
// import AddPerson from '../components/AddPerson/AddPerson';

class Posts extends Component {

    render () {
        return (
            <div>
                {/*} <AddPerson personAdded={this.props.addPerson} /> */}
                {this.props.posts.map(post => (
                    <Post 
                        key={post.id}
                        title={post.title} 
                        body={post.body} 
                    />
                ))}
            </div>
        );
    }
}

// clicked={() => this.props.delPerson(person.id)}


const mapStateToProps = state => {
    console.log(state)
    return {
        posts: state.posts.posts,
    };
};



export default connect(mapStateToProps)(Posts);