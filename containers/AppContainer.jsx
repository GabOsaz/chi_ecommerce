import { Stack } from '@mui/material';

function AppContainer({ children }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="start"
      spacing={2}
      mt={8}
      px={6}
    >
      {children}
    </Stack>
  );
}

export default AppContainer;
