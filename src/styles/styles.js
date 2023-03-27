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
      display:'block', 
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
    aboutUsContainer: {
      backgroundColor: 'blue',
      
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    title: {
      paddingBottom: '15px',
      color: '#008444',
    },
    titleSection: {
      paddingBottom: '30px',
      color: 'black',
      fontSize: '1rem',
      width: '655px',
      height: '144px',
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
  };
};

const useStyles = makeStyles(styles);
export default useStyles;