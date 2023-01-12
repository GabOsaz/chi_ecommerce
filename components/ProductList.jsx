import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../AppContext/DataContext';
import useFetch from '../customHooks/useFetch';
import CustomModal from './Modal';

function ProductList() {
  const url = process.env.NEXT_PUBLIC_PRODUCTS_URL;
  const { data, status } = useFetch(url);
  const [openModal, setModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const dataContext = useContext(DataContext);

  const handleItemClick = (item) => {
    setModalOpen(true);
    setClickedItem(item);
  };

  // rating
  // :
  // {rate: 3.9, count: 120}
  return (
    <>
      <Box className="mt-8 w-full px-6 flex justify-center">
        <div className="grid grid-cols-2 gap-6">
          {data?.data?.map((item) => {
            const {
              title, id, image, category, description, price,
            } = item;
            return (
              <button type="button" onClick={() => handleItemClick(item)} key={id} className="cursor-pointer text-left bg-white rounded-lg w-96 h-52 p-4">
                <div className="flex space-x-4 items-center">
                  <img src={image} className="w-16 h-16" alt={category} />
                  <div className="w-full">
                    <h3 className="text-md">
                      {title}
                    </h3>
                    <p className="mt-4 truncate max-w-[16em]">{description}</p>
                  </div>
                </div>
                <p className="mt-6">
                  {price}
                </p>
              </button>
            );
          })}
        </div>
      </Box>
      <CustomModal open={openModal} setOpen={setModalOpen} data={clickedItem} />
    </>
  );
}

export default ProductList;
