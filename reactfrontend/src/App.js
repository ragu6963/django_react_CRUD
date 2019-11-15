import React, { Component } from 'react';
import Form from './components/Form'
import Post from './components/Post';
import Api from './Api';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';


class App extends Component {
    state = {
        title: "",
        content: "",
        posts: [],
    }

    _handlingChange = (event) => {
        console.log(event.target.name)
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

    _handlingUpdateSubmit = async (id, data) => {
        await Api.updatePost(id, data)
        this._getPosts()
    }

    render() {
        const paper = {
            margin: "2rem",
            padding: "2rem",
        }
        return (
            <Container maxWidth="md" >
                <Paper style={paper} >
                    <Box fontWeight="fontWeightBold" letterSpacing={10} m={1} fontSize="2rem">
                        멋쟁이 사자처럼 대나무숲
                    </Box>
                    <Form
                        handlingChange={this._handlingChange}
                        handlingSubmit={this._handlingSubmit}
                        title={this.state.title}
                        content={this.state.content}
                    />
                </Paper>
                {
                    this.state.posts.map((post) =>
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            handlingDelete={this._handlingDelete}
                            handlingUpdateSubmit={this._handlingUpdateSubmit}
                        />
                    )
                }
            </Container >
        );
    }
}

export default App;