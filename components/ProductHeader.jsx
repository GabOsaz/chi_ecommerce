import { Box } from '@mui/material';

function ProductHeader() {
  return (
    <Box className="min-w-[300px] lg:min-w-[800px] sticky top-0 bg-white myShadow rounded-xl px-8 py-2">
      <h1 className="text-5xl"> Chi Mart </h1>
    </Box>
  );
}

export default ProductHeader;
