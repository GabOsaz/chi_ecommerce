import { Box } from '@mui/material';

function ProductListContainer({ children }) {
  return (
    <Box className="min-w-3/4">
      { children }
    </Box>
  );
}

export default ProductListContainer;
