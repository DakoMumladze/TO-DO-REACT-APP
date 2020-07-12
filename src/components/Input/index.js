import React from 'react';
import TextField from '@material-ui/core/TextField'
import useStyles from './style'


export default function Input() {
    const classes = useStyles()
  
    return (
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Type to do item" variant="outlined" className={classes.addItem} />
      </form>
    );
  }