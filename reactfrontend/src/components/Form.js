import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

export default class Create extends Component {
    render() {
        const Styles = makeStyles(theme => ({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200,
            },
        }));

        const formstyle = {
            display: "flex",
            flexDirection: "column",
            textAlign: "right"
        }
        return (
            <div>
                <form onSubmit={this.props.handlingSubmit} >
                    <div style={formstyle}>
                        <TextField
                            maxLength="10"
                            name='title'
                            value={this.props.title}
                            onChange={this.props.handlingChange}
                            className={Styles.textField}
                            label="Title"
                            margin="normal"
                            variant="outlined"
                            autoComplete="off"
                        />
                        <TextField
                            value={this.props.content}
                            onChange={this.props.handlingChange}
                            name='content'
                            label="Content"
                            multiline
                            rows="4"
                            className={Styles.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <div>
                            <Fab
                                size="medium"
                                color="secondary"
                                aria-label="edit"
                                className={Styles.fab}
                                type="submit"
                            >
                                <EditIcon />
                            </Fab>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}