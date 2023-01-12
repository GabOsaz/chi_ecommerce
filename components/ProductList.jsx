import { Box } from '@mui/material';
import useFetch from '../customHooks/useFetch';

function ProductList() {
  const url = '/products?limit=5';
  const { data, status } = useFetch(url);
  console.log(data.data, status, 'isLoading');

  // rating
  // :
  // {rate: 3.9, count: 120}
  return (
    <Box className="mt-8 w-full px-6 flex justify-center">
      <div className="grid grid-cols-2 gap-6">
        {data?.data.map((item) => {
          const {
            title, id, image, category, description, price,
          } = item;
          return (
            <div key={id} className="ring-1 rounded-lg w-96 h-52 p-4">
              <div className="flex space-x-4 items-center">
                <img src={image} className="w-16 h-16" alt={category} />
                <div className="w-full">
                  <h3 className="text-md">
                    {title}
                  </h3>
                  <p className="mt-4 truncate max-w-[16em]">{description}</p>
                </div>
              </div>
              <p className="mt-4">
                {price}
              </p>
            </div>
          );
        })}

      </div>
    </Box>
  );
}

export default ProductList;
