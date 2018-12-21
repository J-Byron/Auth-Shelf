import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Shelf extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_ITEMS' })

  }

  deleteItem = (item) => {
    this.props.dispatch({ type: 'DELETE_ITEMS', payload: item.id })
  }

  render() {
    let display = this.props.reduxStore.shelfReducer.map(item => {
      return <li style={listStyles} key={item.id}><img style={imgStyles} src={item.image_url} /><p>{item.description}</p>
        <Button onClick={() => this.deleteItem(item)} variant="contained" color="secondary">
          Delete
          <DeleteIcon />
        </Button></li>
    })
    return (
      <Grid container item xs={12}>
        <ul>
          {display}
        </ul>
      </Grid>
    )
  }
}
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
}

const listStyles = {
  listStyle: 'none',
  margin: '20px',
  display: 'inline-block'
}

const imgStyles = {
  maxWidth: '200px',
  height: '180px',
  overflow: 'hidden'
}

export default connect(mapStateToProps)(Shelf);
