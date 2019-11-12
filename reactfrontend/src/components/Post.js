import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
export default class Post extends Component {
    state = {
        editable: false,
        title: "",
        content: "",
    }
    _handlingDelete = () => {
        const { id, handlingDelete } = this.props
        handlingDelete(id)
    }
    _handlingToggleEdit = () => {
        this.setState({
            editable: true,
        })
    }
    _handlingEditChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const { title, content } = this.props
        if (!prevState.editable && this.state.editable) {
            this.setState({
                title: title,
                content: content,
            })
        }
    }

    render() {
        const { editable } = this.state
        const { id, title, content } = this.props

        if (editable) {
            return (
                <div>
                    <input
                        name='title'
                        value={this.state.title}
                        onChange={this._handlingEditChange}
                    />
                    <textarea
                        name='content'
                        value={this.state.content}
                        onChange={this._handlingEditChange}
                    />
                    <button onClick={this._handlingEditSubmit} >수정완료</button>

                </div >
            )
        }

        else {
            return (
                <div>
                    <h3>글 제목 : {title}</h3>
                    <p>글 내용 : {content}</p>
                    <button onClick={this._handlingDelete}>삭제하기</button>
                    {/* <button onClick={this._handlingToggleEdit} >edit</button> */}
                </div >
            )
        }
    }
}