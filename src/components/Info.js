import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import useStyles from '../styles/styles';
import panahkanan from '../images/panahkanan.png';

    const Info = () => {
        const classes = useStyles();
    
  return (
    <div>
      <Box className={classes.Info1}>
        <div className={classes.Info2}>
        Cek informasi pangan ter up to date lewat dashboard 
        </div>
        <p className={classes.Info3}>
        Dapatkan informasi ketahanan pangan yang berasal dari analisis para ahli ketahanan pangan. 
        </p>
        <p className={classes.Info4}>
        Cek Informasi Via Dashboard Disini
        </p>
        <img src={panahkanan} className={classes.Info5}>
        </img>
      </Box>
    </div>
  )
}

export default Info;