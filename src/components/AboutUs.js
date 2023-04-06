import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { Col, Row, } from 'react-bootstrap';
// import bestTeams from '../images/bestTeams.jpg';
import useStyles from '../styles/styles';
import padi from '../images/bg/pad_bg.jpg';
import peta from '../images/peta.png';
import Grid from '@mui/material/Grid';


const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box style={{ backgroundImage: `url(${padi})` }} className={classes.aboutUsBox}>
      <div >
        <Container >
          {/* <img src={padi} className={classes.aboutBg}/> */}
          <div className={classes.aboutUsContainer}>
            <Typography textAlign='Center' fontSize="40px" color="rgb(0, 132, 68)">Pilar Ketahanan Pangan</Typography>
            <Typography textAlign='Center' fontSize="20px" color="initial">Ketahanan Pangan adalah kondisi terpenuhinya kebutuhan masyarakat akan tiga pilar ketahanan pangan yaitu ketersediaan, akses, dan pemanfaatan pangan masyarakat di suatu wilayah.</Typography>
          </div>
        </Container>
      </div>
      <Container>
        <Row className={classes.text1}>
        <Col className={classes.ket1}>
        Ketersediaan
        </Col>
        <Col className={classes.ket2}>
        Pilar ini mengukur kondisi tersedianya pangan dari hasil produksi dalam negeri, cadangan pangan, serta pemasukan pangan (termasuk didalamnya impor dan bantuan pangan) apabila kedua sumber utama tidak dapat memenuhi kebutuhan.
        </Col>
      </Row>
        <Row className={classes.text2}>
        <Col className={classes.keter1}>
        Ketersediaan
        </Col>
        <Col className={classes.keter2}>
        Pilar ini mengukur kondisi tersedianya pangan dari hasil produksi dalam negeri, cadangan pangan, serta pemasukan pangan (termasuk didalamnya impor dan bantuan pangan) apabila kedua sumber utama tidak dapat memenuhi kebutuhan.
        </Col>
      </Row>
        <img src={peta} alt="My Team" className={classes.peta} />
    </Container>
    </Box>
  );
};

export default AboutUs;
{/* <Grid container spacing={0} className={classes.aboutUsgridContainer}>
  <Grid item xs={12} md={5}>
    <img src={bestTeams} alt="My Team" className={classes.largeImage} />
  </Grid>
  <Grid item xs={3} md={7}>
    <Typography variant="h3" fontWeight={700} className={classes.titlePilar}>
    Pilar Ketahanan Pangan
    </Typography>
    <Typography className={classes.aboutUsSubtitle}>
      bla bla bla test
    </Typography>
  </Grid>
</Grid> */}