import Hero from "./components/Hero"
import Header from "./components/Header"
import Section from "./components/Section"
// import Testimonial from "./components/Testimonial"
import ContactUs from "./components/ContactUs"
// import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Dataset from "./components/Dataset"
import Info from "./components/Info"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
    ].join(','),
  },});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Section />
      <AboutUs />
      <Dataset />
      <Info />
      <ContactUs />
      </ThemeProvider>
    </>

  );
}

export default App;
