import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Grid, withStyles, Paper, Typography } from 'material-ui';
const styles = theme => ({
  root: {
    marginTop: 50,
  },
  list: {
    border: "solid 1px rgba(160, 160, 160, 0.3)"
  }
})
class App extends Component {
  render() {

    const { classes } = this.props
    return (
      <div className="App">
        <Header/>
        <Grid container justify="center" className={classes.root}>
        <Grid></Grid>
          <Grid item xs={12} sm={12} md={3} elevation={1}>
            sldjfldfjlsd
          </Grid>
          <Grid className={classes.list} item xs={12} sm={12} md={7}>
            dsfsdfsdf
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);