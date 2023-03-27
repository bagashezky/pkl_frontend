import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
// import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
// import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import logosimawaswarna from "../images/logosimawaswarna.png";
import maskgroup from "../images/maskgroup.png";
import logosmws from "../images/logosmws.png";
import line3 from "../images/line3.png";
import useStyles from '../styles/styles';

const Section = () => {
  const classes = useStyles();

  // const sectionItems = [
  //   {
  //     id: 1,
  //     icon: <EngineeringOutlinedIcon sx={{ fontSize: 100 }} color="primary" />,
  //     sentence:
  //       'Solving world problems through various web applications using efficient programs and tools',
  //   },
  // ];
  return (
    <Box className={classes.sectionBox}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} >
          <img src={line3} alt="My Team" className={classes.line3} />
        </Grid>
        <Grid item xs={12}>
          <img src={logosmws} alt="My Team" className={classes.logosmws} />
        </Grid>
        <Grid item xs={12}>
          <img src={maskgroup} alt="My Team" className={classes.maskgroup} />
        </Grid>
        <Grid item xs={12}>
          <img src={logosimawaswarna} alt="My Team" className={classes.imgsimawaswarna} />
        </Grid>
        <Grid item xs={17} md={9}>
          <Typography fontWeight={400} className={classes.titleSection}>
            Sistem Informasi Pengawasan Pangan dan Gizi (SIMAWASPAGI) merupakan aplikasi inovasi digital dari Pusat Komando Ketahanan Pangan dan Peternakan Jawa Barat yang menyediakan data dan sistem informasi terkait parameter Ketahanan Pangan dan Gizi dari setiap kabupaten/kota di Jawa Barat secara terintegrasi dan intuitif untuk memberikan arah dan rekomendasi bagi para pembuat keputusan dalam penyusunan program, kebijakan, serta pelaksanaan intervensi di tingkat provinsi dan kota/kabupaten.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;