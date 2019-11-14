import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        title: "",
        content: "",
    }

    _handlingDelete = () => {
        const { id, handlingDelete } = this.props
        handlingDelete(id)
    }

    render() {
        const { title, content } = this.props
        return (
            <div>
                <span>{title}</span>
                <button onClick={this._handlingDelete}>삭제하기</button>
                <p>글 내용 : {content}</p>
            </div >
        )
    }
}