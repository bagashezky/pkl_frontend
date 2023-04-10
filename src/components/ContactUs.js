import React from 'react'
import { Box } from '@mui/material'
import useStyles from '../styles/styles';
import footerimg from '../images/footerimg.png';
import logosimafoot from '../images/PUSKOM/logosimafoot.png';
import logodkppfoot from '../images/PUSKOM/logodkppfoot.png';

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
      <img src={footerimg} >
      </img>
      <img src={logosimafoot} className={classes.Con3}>
      </img>
      <img src={logodkppfoot} className={classes.Con4}>
      </img>
      </Box>
    </div>
  );
}

export default ContactUs;