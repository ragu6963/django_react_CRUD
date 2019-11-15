import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Post extends Component {
    state = {
        title: this.props.title,
        content: this.props.content,
        edit: false,
        edit_title: "",
        edit_content: "",
    }
    _handlingDelete = () => {
        const { id, handlingDelete } = this.props
        handlingDelete(id)
    }
    _handlingUpdate = () => {
        this.setState({
            edit: true,
            edit_title: this.props.title,
            edit_content: this.props.content,
        })
    }
    _handlingUpdateChange = (event) => {
        if (event.target.name === "edit_title") {
            if (event.target.value.length === 20) return;
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    _handlingUpdateSubmit = () => {
        const data = {
            title: this.state.edit_title,
            content: this.state.edit_content,
        }
        this.props.handlingUpdateSubmit(this.props.id, data)
        this.setState({
            edit: false,
            title: this.state.edit_title,
            content: this.state.edit_content

        })
    }
    _handlingUpdateCancle = () => {
        this.setState({
            edit: false,
        })
    }
    render() {
        const card = {
            margin: "2rem",
            padding: "1rem",
        }
        if (this.state.edit) {
            return (
                <div>
                    <Card style={card}>
                        <CardContent>
                            <TextField
                                onChange={this._handlingUpdateChange}
                                name='edit_title'
                                style={{ width: "100%", }}
                                value={this.state.edit_title}
                                variant="outlined"
                                label="Updating..."
                            />
                            <TextField
                                onChange={this._handlingUpdateChange}
                                name='edit_content'
                                style={{ width: "100%", marginTop: "1.5rem" }}
                                multiline
                                rows="4"
                                value={this.state.edit_content}
                                variant="outlined"
                                label="Updating..."
                            />
                        </CardContent>
                        <CardActions style={{ padding: 16 }}>
                            <Button variant="outlined" color="primary" size="small" onClick={this._handlingUpdateCancle}>취소</Button>
                            <Button variant="outlined" color="primary" size="small" onClick={this._handlingUpdateSubmit}>수정 완료</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Card style={card}>
                        <CardContent>
                            <TextField
                                style={{ width: "100%", }}
                                value={this.state.title}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                error
                                label="Title"
                            />
                            <TextField
                                style={{ width: "100%", marginTop: "1.5rem" }}
                                multiline
                                rows="4"
                                value={this.state.content}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                error
                                label="Content"
                            />
                        </CardContent>
                        <CardActions style={{ padding: 16 }}>
                            <Button variant="outlined" color="secondary" size="small" onClick={this._handlingDelete}>삭제</Button>
                            <Button variant="outlined" color="secondary" size="small" onClick={this._handlingUpdate}>수정</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }
}