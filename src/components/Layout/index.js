import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useStyles from './style'

export default function MainContainer() {
  const classes = useStyles()
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.main}>
          <Typography component="div" />
        </Container>
      </React.Fragment>

    );
}
