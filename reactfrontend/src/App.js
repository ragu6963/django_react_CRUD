import React, { Component } from 'react';
import Form from './components/Form'
import Post from './components/Post';
import Api from './Api';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
class App extends Component {
  state = {
    title: "",
    content: "",
    posts: [],
  }

  _handlingChange = (event) => {
    if (event.target.name === "title") {
      if (event.target.value.length === 20) return;
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  _handlingSubmit = async (event) => {
    event.preventDefault()
    await Api.createPost({ title: this.state.title, content: this.state.content })
    this.setState({
      title: "",
      content: "",
    })
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
    const container = {
      backgroundColor: "white",
      marginTop: "3rem",
    }
    return (
      <Container maxWidth="md" style={container}>
        <center>
          <br></br>
          <h1>멋쟁이 사자처럼 대나무숲</h1>
        </center>
        <Box bgcolor="primary.main">
          <Form
            handlingChange={this._handlingChange}
            handlingSubmit={this._handlingSubmit}
            title={this.state.title}
            content={this.state.content}
          />
        </Box>
        {
          this.state.posts.map((post) =>
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              handlingDelete={this._handlingDelete}
            />
          )
        }
      </Container>
    );
  }
}

export default App;