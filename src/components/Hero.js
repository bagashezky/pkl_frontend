import React from 'react';
import { Grid, Typography,Box , IconButton , InputBase} from '@mui/material';
// import myteam from '../images/myteam.jpg';
import sideakar from '../images/sideakar.png';
import useStyles from '../styles/styles';
import SearchIcon from '@mui/icons-material/Search';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={17} md={9}>
          <Typography variant="h3" fontWeight={700} fontSize={30} className={classes.title}>
            Temukan data Ketahanan Pangan di Jawa Barat dengan cepat, tepat, dan akurat.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Mulai dari stok, harga, hingga distribusi semuanya ada disini!
            Dari data beras, bawang merah, hingga daging sapi  bisa kamu temukan hanya dengan satu kali klik!
          </Typography>
          <Box display='left' justifyContent='space-between' >
            <Box
            display='flex'
            backgroundColor='white'
            borderRadius='2px'
            >
              <InputBase sx={{ml:2, flex:1}} placeholder="search"/>
              <IconButton type='button' sx={{p:1}}>
                <SearchIcon/>
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <div>
          <span className={classes.sateBox}>
          <img src={sideakar} alt="My Team" className={classes.sate} />
          </span>
        </div>
      </Grid>
    </Box>
  );
};

export default Hero;