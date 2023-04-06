import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import logosimawaswarna from "../images/logosimawaswarna.png";
import maskgroup from "../images/maskgroup.png";
import dataset from "../images/dataset/bro.png";
import panahkanan from "../images/panahkanan.png";
import useStyles from '../styles/styles';
import { Container } from 'react-bootstrap';

const Section = () => {
    const classes = useStyles();

  return (
    <div>
        <container>
    <Box className={classes.sectionBox}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12}>
          <img src={dataset} alt="My Team" className={classes.dataset} />
        </Grid>
        <h4 className={classes.judulDataset}>
        Apa itu Dataset?
        </h4>
        <Grid item xs={50} md={9}>
          <Typography fontWeight={400} className={classes.titleDataset}>
          Dapatkan berbagai koleksi data tentang ketahanan pangan yang bisa kamu donwload dan olah kembali lewat Dataset. Koleksi dataset ini berasal dari berbagai Organisasi Perangkat Daerah Jawa Barat.
          </Typography>
        </Grid>
          <Typography variant="h4" fontColor='rgba(0, 132, 68, 1)' gutterBottom className={classes.titleDatasetCek}>
          Cek Data Lengkapnya Disini
          </Typography>
          <img src={panahkanan} alt="My Team" className={classes.panahkanan} />

      </Grid>
    </Box>
    </container>
    </div>
  )
}
export default Section;
