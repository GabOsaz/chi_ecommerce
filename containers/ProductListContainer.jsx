import { Box } from '@mui/material';

function ProductListContainer({ children }) {
  return (
    <Box className="w-3/4">
      { children }
    </Box>
  );
}

export default ProductListContainer;
