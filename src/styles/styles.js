import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {
    toolBar: {

      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#B7DEC4',
    },
    logo: {
      color: 'blue',
      cursor: 'pointer',
    },
    link: {
      color: "#000"
    },
    menuIcon: {
      color: '#000',
    },
    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
    },
    form: {
      marginTop: '30px',
    },
    formHeading: {
      textAlign: 'center',
    },
    heroBox: {
      width: '100%',
      backgroundColor: '#B7DEC4',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionBox: {
      width: '100%',
      backgroundColor: 'white',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sate: {
      position: 'absolute',
      maxwidth: '100%',
      display: 'block',
      height: 'auto',
      width: '192px',
      left: '1054px',
      top: '116px',
    },
    line3: {
      position: 'absolute',
      left: '1px',
    },
    maskgroup: {
      position: 'absolute',
      width: '239px',
      height: '212px',
      left: '1110px',
      top: '622px',
    },
    logosmws: {
      position: 'absolute',
      width: '289px',
      height: '280px',
      left: '837px',
      top: '784px',
    },


    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    aboutUsgridContainer: {
      maxWidth: '1300px',
      padding: '50px',

    },
    aboutUsContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1300px',
      padding: '13px',
    },
    aboutUsBox: {
      width: '100%',
      minHeight: '600px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    aboutBg: {
      position: 'absolute',
    },
    title: {
      paddingBottom: '15px',
      color: '#008444',
    },
    titlePilar: {
      paddingBottom: '15px',
      color: '#008444',
      textAlign: 'center',

    },
    titleSection: {
      paddingBottom: '30px',
      color: 'black',
      fontSize: '1rem',
      width: '655px',
      height: '144px',
    },
    titleDataset: {
      position: 'absolute',
      paddingBottom: '30px',
      color: 'black',
      fontSize: '1rem',
      width: '661px',
      height: '84px',
      left: '538px',
      top: '1974px',
    },
    titleDatasetCek: {
      position: 'absolute',
      paddingBottom: '30px',
      color: 'rgba(0, 132, 68, 1)',
      fontSize: '36px',
      width: '661px',
      height: '84px',
      left: '538px',
      top: '2141px',
    },
    judulDataset: {
      position: 'absolute',
      paddingBottom: '30px',
      color: 'black',
      fontSize: '2rem',
      width: '661px',
      height: '84px',
      left: '538px',
      top: '1914px',
    },
    titleDataset1: {
      position: 'absolute',
      paddingBottom: '30px',
      color: 'black',
      fontSize: '1rem',
      width: '661px',
      height: '84px',
      left: '538px',
      top: '1974px',
    },
    subtitle: {
      paddingBottom: '30px',
      color: 'black',
    },
    largeImage: {
      width: '100%',
    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '500px',
    },
    sectionGridItem: {
      backgroundColor: '#f2f0f1',
      textAlign: 'center',
      padding: '30px',
      width: '200px',
      borderRadius: '10px',
      margin: '10px !important',
    },
    inputField: {
      marginBottom: '20px !important',
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#f2f0f1',
      flexDirection: 'column',
    },
    footerText: {
      paddingBottom: '10px',
    },
    footerDate: {
      opacity: '0.4',
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    testimonialStatement: {
      paddingBottom: '25px',
    },
    avatar: {
      marginRight: '10px',
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },

    text1: {
      position: 'absolute',
      width: '289px',
      height: '280px',
      left: '84px',
      top: '1382px',
    },

    ket1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10px 100px 10px 10px',
      gap: '10px',
      background: '#FFFFFF',
      borderRadius: '4px',
    },

    ket2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
    },
    text2: {
      position: 'absolute',
      width: '289px',
      height: '280px',
      left: '915px',
      top: '1382px',
    },

    keter1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '10px 100px 10px 10px',
      gap: '10px',
      background: '#FFFFFF',
      borderRadius: '4px',
    },

    keter2: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '24px',
    },
    peta: {
      position: 'absolute',
      width: '391px',
      height: '284px',
      left: '492px',
      top: '1402px',
    },
    panahkanan: {
      position: 'absolute',
      left: '1036px',
      top: '2134px',
    },
    dataset: {
      position: 'absolute',
      width: '289px',
      height: '280px',
      left: '51px',
      top: '1818px',
    }
  };
};

const useStyles = makeStyles(styles);
export default useStyles;