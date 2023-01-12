/* eslint-disable no-unsafe-optional-chaining */
import { useContext } from 'react';
import { Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useFetch from '../customHooks/useFetch';
import useGetLSCart from '../customHooks/useGetLSCart';
import { DataContext } from '../AppContext/DataContext';
import CartIconBtn from './CartIconBtn';
import removeFromCart from '../actions/removeFromCart';
import increaseCartItemQty from '../actions/increaseCartItemQty';
import CustomButton from './CustomButton';

function Cart() {
  const { data } = useFetch(process.env.NEXT_PUBLIC_PRODUCTS_URL);
  const [cart] = useGetLSCart();
  const dataContext = useContext(DataContext);
  console.log(cart, data);
  return (
    <Box className="w-1/4 myShadow rounded-xl sticky top-6 px-2 max-h-[500px] overflow-auto">
      <h3 className="text-center text-2xl"> Your Cart </h3>
      {cart?.length ? cart?.map((item) => {
        const completeItemDetails = data?.data?.find((each) => each.id === item.id);
        const isLastItem = item.id === cart[cart.length - 1].id;
        return (
          <CartItems
            key={item.id}
            isLastItem={isLastItem}
            item={item}
            completeItemDetails={completeItemDetails}
          />
        );
      })
        : <EmptyState />}

      <Box mt={4}>
        <CustomButton onClick={() => null}>
          {`Order ${cart?.length} for NGN ${(cart?.reduce((a, b) => a + b.price))}`}
        </CustomButton>
      </Box>
    </Box>
  );
}

function CartItems({ item, completeItemDetails, isLastItem }) {
  return (
    <>
      <Stack
        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        className="text-sm"
      >
        <Box>
          <p className="font-semibold">
            {item?.quantity}
            x
          </p>
        </Box>
        <Box>
          <p>
            {completeItemDetails?.title}
          </p>
        </Box>
        <Box>
          <p>
            NGN
            {' '}
            {completeItemDetails?.price * item?.quantity}
          </p>
        </Box>
      </Stack>
      <div className="flex justify-between items-center py-4">
        <CartIconBtn handleClick={() => removeFromCart(item?.id, item?.quantity)}>
          <RemoveIcon />
        </CartIconBtn>
        <CartIconBtn handleClick={() => increaseCartItemQty(item?.id)}>
          <AddIcon />
        </CartIconBtn>
      </div>
      {!isLastItem ? <hr /> : null}
    </>
  );
}

function EmptyState() {
  return (
    <Box className="mt-6 flex flex-col justify-center w-full 4y-6">
      <img src="/astronaut-grey-scale.svg" alt="empty cart" />
      <p className="mt-4 text-center px-8">
        You have not added any products yet, when you do, you will see them here!
      </p>
    </Box>
  );
}

export default Cart;
