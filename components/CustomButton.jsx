import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { green } from '@mui/material/colors';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[900]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  padding: '1em 2em',
  borderRadius: 28,
}));

export default CustomButton;
