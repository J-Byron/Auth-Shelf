import React, {Component} from 'react';
import {connect} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const imgStyles = {
  maxWidth: '200px'
}

class Shelf extends Component {

  componentDidMount = () => {
    this.props.dispatch({type: 'FETCH_ITEMS'})
    
  }

  render() {
    let display = this.props.reduxStore.shelfReducer.map(item => {
      return <li key={item.id}><img style={imgStyles} src={item.image_url}/><p>{item.description}</p></li>
    })
    return(
      <ul>
        {display}
        {/* {JSON.stringify(this.props.reduxStore.shelfReducer)} */}
      </ul>
    )
  }
}
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

export default connect(mapStateToProps)(Shelf);
