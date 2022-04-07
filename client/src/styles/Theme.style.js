import { createTheme, styled } from '@mui/material/styles';
import { OutlinedInput, Toolbar, Input } from "@mui/material";

/*
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));





*/


// rgb(213, 72, 87)
const globalFontFamily = "Courier Prime, Source Sans Pro, Arial, Helvetica, sans-serif"
// font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
const errorColor = "rgb(213, 72, 87)";


const theme = createTheme({
  palette: {
    error: {
      main: errorColor,
    }
  },
  "*": {
    overflow: "hidden"
  },
  typography: {
    fontFamily: globalFontFamily,
    // color: "blue",
    h1: {
      fontFamily: "Source Sans Pro, Arial, Helvetica, sans-serif",
      fontSize: "3.4rem",
      lineHeight: 1.2,
      fontWeight: 700
    },
    h2: {
      fontFamily: globalFontFamily,
      fontWeight: 700,
      fontSize: '1.90rem',
      lineHeight: 1,
      fontWeight: 900
    },
    h4: {
      fontFamily: globalFontFamily,
      fontSize: '1.20rem',
      lineHeight: 1.5,
      fontWeight: 700
    },
    h6: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: '1.05rem',
    }
  },
  // components: {
  //   MuiButton: {
  //     color: errorColor
  //   }
  // }
});





// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   color: "blue",
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

// theme.typography.h1 = {
//   fontSize: '1.2rem',
//   color: "blue",
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };








const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  color: "white",
  border: "solid 2px rgba(110, 110, 122, 0.5)",
  height: "48px",
  textTransform: 'capitalize'
}));


const CustomToolbar = styled(Toolbar)((props) => ({
  alignItems: 'flex-start',
  paddingTop: props.theme.spacing(1),
  paddingBottom: props.theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 80,
  },
}));



// border-bottom: 1px solid rgba(0, 0, 0, 0.42);
// left: 0;
// bottom: 0;
// content: "\00a0";
// position: absolute;
// right: 0;
// -webkit-transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// pointer-events: none;


const CustomFileInput = styled(Input)(({ theme }) => {
  return {
    color: "white",
    marginTop: '1rem',
    '::before': {
      border: 'none',
      position: 'static',
      content: 'none',
    },
    '::after': {
      border: 'none',
      position: 'static',
      content: 'none'
    }
  }
});






export {
  // COMPONENT / ELEMENT 
  CustomOutlinedInput,
  CustomToolbar,
  CustomFileInput,

  // ROOT THEME DESIGN 
  theme
};