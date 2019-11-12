import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Post from './components/Post';
import Api from './Api';
import Container from '@material-ui/core/Container';

class App extends Component {
  state = {
    title: "",
    content: "",
    posts: [],
  }

  _handlingChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handlingSubmit = async (event) => {
    event.preventDefault()
    await Api.createPost({ title: this.state.title, content: this.state.content })
    this._getPosts()
  }

  componentDidMount() {
    this._getPosts()
  }

  async _getPosts() {
    const results = await Api.getAllPosts()
    this.setState({
      posts: results.data,
    })
  }

  _handlingDelete = async (id) => {
    await Api.deletePost(id)
    this._getPosts()
  }


  render() {
    return (
      <Container maxWidth="sm" className="App">
        <h1>멋쟁이 사자처럼 대나무숲</h1>
        <Form
          handlingChange={this._handlingChange}
          handlingSubmit={this._handlingSubmit}
          title={this.state.title}
          content={this.state.content}
        />
        {
          this.state.posts.map((post) =>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              handlingDelete={this._handlingDelete}
              handlingEditSubmit={this._handlingEditSubmit}
            />
          )
        }
      </Container>
    );
  }
}

export default App;