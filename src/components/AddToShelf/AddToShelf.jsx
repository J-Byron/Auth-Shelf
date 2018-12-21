import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddToShelf extends Component {

    state = {
        description: '',
        image: ''
    }

    handleChange = (event) => {
        console.log(`${event.target.name} changed to ${event.target.value}`);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'POST_ITEM',
            payload: this.state
        })

        this.setState({
            description: '',
            image: ''
        })
    }

    render() {
        return (
            <div style={divContainer}>
                <TextField name={'description'}
                    style={inputStyle}
                    label="Description"
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    placeholder="Description"
                    value={this.state.description}
                />
                <TextField
                    style={inputStyle}
                    name={'image'}
                    label="Image"
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    placeholder="Image"
                    value={this.state.image}
                />
                <Button
                    style={btnStyle}
                    onClick={this.handleClick}
                    variant="contained"
                    color="primary"
                    size="large" >
                    Add Image
                </Button>
            </div>
        )
    }
};

const btnStyle = {
    display: 'block',
    margin: '0 auto',
    marginTop: '20px'
}

const inputStyle = {
    margin: '10px'
}

const divContainer = {
    margin: '0 auto',
    marginTop: '40px',
    textAlign: 'center'
}

export default connect()(AddToShelf);