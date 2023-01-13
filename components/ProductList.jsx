import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { DataContext } from '../AppContext/DataContext';
import useFetch from '../customHooks/useFetch';
import CustomModal from './Modal';

function ProductList() {
  const url = process.env.NEXT_PUBLIC_PRODUCTS_URL;
  const { data, status } = useFetch(url);
  const [openModal, setModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const { naira } = useContext(DataContext);

  const handleItemClick = (item) => {
    setModalOpen(true);
    setClickedItem(item);
  };

  return (
    <>
      <Box className="my-8 w-full px-6 flex justify-center">
        {status === 'fetched'
          ? <ProductItem naira={naira} data={data} handleItemClick={handleItemClick} />
          : (
            <Box className="flex flex-col items-center mt-16 w-full">
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
              />
              <p className="mt-4 text-green-700"> One sec. pls... </p>
            </Box>
          )}
      </Box>
      <CustomModal open={openModal} setOpen={setModalOpen} data={clickedItem} />
    </>
  );
}

function ProductItem({ data, naira, handleItemClick }) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-6 w-full">
      {data?.data?.map((item) => {
        const {
          title, id, image, category, description, price,
        } = item;
        return (
          <button type="button" onClick={() => handleItemClick(item)} key={id} className="cursor-pointer border-none myShadow text-left bg-white rounded-lg w-96 h-52 p-4">
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
              {naira}
              {' '}
              {price}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default ProductList;
