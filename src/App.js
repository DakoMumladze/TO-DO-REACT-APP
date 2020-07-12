import React from 'react';
import Input from './components/Input'
import AddButton from './components/AddButton'
import Grid from '@material-ui/core/Grid'
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Input />
        </Grid>
        <Grid item>
          <AddButton />
        </Grid>
        </Grid>
    </div>
  );
}

export default App;
