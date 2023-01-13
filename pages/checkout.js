import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { DataContext } from '../AppContext/DataContext';
import CustomButton from '../components/CustomButton';
import useFetch from '../customHooks/useFetch';
import useGetLSCart from '../customHooks/useGetLSCart';
import getTotalOrderPrice from '../helpers/getTotalOrderPrice';

function Checkout() {
  const [cart] = useGetLSCart();
  const { naira } = useContext(DataContext);
  const { data } = useFetch(process.env.NEXT_PUBLIC_PRODUCTS_URL);
  const cartPrices = cart?.map((each) => {
    const foundItem = data?.data?.find((item) => item.id === each.id);
    return {
      ...each,
      price: foundItem && (foundItem.price * each.quantity),
      name: foundItem?.title,
    };
  });
  const router = useRouter();
  const totalPrice = getTotalOrderPrice(cartPrices);
  const handleFInish = () => {
    toast.success('Order completed!');
    localStorage.removeItem('cart');
    setTimeout(() => {
      router.push('/');
    }, 5000);
  };

  return (
    <Box className="flex flex-col justify-center items-center w-full">
      <Box className="w-1/3 bg-white rounded-xl p-4 myShadow mt-16">
        <h2 className="text-center"> Items Summary </h2>
        <Box className="mt-4 flex justify-between items-center uppercase font-semibold text-md">
          <p className=""> Item Name </p>
          <p className=""> Price </p>
        </Box>
        {data?.data?.length
          ? (
            <>
              <ItemsList cartPrices={cartPrices} naira={naira} />
              <Totalprice totalPrice={totalPrice} />
            </>
          )
          : 'Please wait...'}
        <Box data-testid="finish_btn" className="flex justify-center" mt={4}>
          <CustomButton onClick={handleFInish}>
            Order
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
}

function ItemsList({ cartPrices, naira }) {
  return (
    cartPrices?.map((item) => (
      <Box key={item.name} className="mt-0 flex justify-between items-center text-sm">
        <p className="max-w-[200px]">
          <strong className="text-green-700 mr-1">
            {item.quantity}
          </strong>
          {' '}
          {item.name}
        </p>
        <p>
          {naira}
          {item.price}
        </p>
      </Box>
    ))
  );
}

function Totalprice({ totalPrice }) {
  return (
    <Box className="mt-4 flex justify-between items-center font-semibold text-md">
      <p> Total Price </p>
      <p className="text-green-700">
        NGN
        {' '}
        {totalPrice}
      </p>
    </Box>
  );
}

export default Checkout;
