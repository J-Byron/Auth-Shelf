import React, { Component } from 'react';

import {connect} from 'react-redux';



class AddToShelf extends Component {

    state = {
        description:'',
        image: ''
    }  

    handleChange = (event) =>{
        console.log(`${event.target.name} changed to ${event.target.value}`);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        
    }

    render(){
        return(
            <React.Fragment>
                <input name={'description'} onChange={this.handleChange} type="text" placeholder="Description"/>
                <input name={'image'} onChange={this.handleChange} type="text" placeholder="Image"/>
                <button>
                    Submit
                </button>
            </React.Fragment>
        )
    }
};

export default connect()(AddToShelf);