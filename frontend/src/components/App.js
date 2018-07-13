import React, { Component } from 'react';
import './App.css';
import Layout from './Layout'
import Posts from './Posts'
// import Post from './Post'
import {Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Route path="/" exact component={Posts} />
          <Route path="/postAdd" exact component={Posts} />
          {/*<Route path="/post/:id" render={() => <Post id={id} />} /> */}
        </Layout>
      </div>
    );
  }
}

export default App;