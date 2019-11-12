import React, { Component } from 'react'

export default class Create extends Component {
    render() {
        const formstyle = {
            display: "flex",
            flexDirection: "column"
        }
        const item = {
            marginTop: "2rem",
            flex: 1,
        }
        return (
            <div >
                <form onSubmit={this.props.handlingSubmit} style={formstyle}>
                    <input
                        name='title'
                        value={this.props.title}
                        onChange={this.props.handlingChange}
                        style={item}
                    />
                    <textarea
                        name='content'
                        value={this.props.content}
                        onChange={this.props.handlingChange}
                        style={item}
                    />
                    <button type="submit" style={item}>글 작성</button>
                </form>
            </div >
        )
    }
}