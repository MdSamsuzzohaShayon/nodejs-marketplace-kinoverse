import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { OutlinedInput, Toolbar } from "@mui/material";

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

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});


*/

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  color: "white",
  border: "solid 2px rgba(110, 110, 122, 0.5)",
  height: "48px"
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


export { CustomOutlinedInput, CustomToolbar };