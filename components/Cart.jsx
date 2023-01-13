/* eslint-disable no-unsafe-optional-chaining */
import { useRouter } from 'next/router';
import { Box, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useFetch from '../customHooks/useFetch';
import useGetLSCart from '../customHooks/useGetLSCart';
import CartIconBtn from './CartIconBtn';
import removeFromCart from '../actions/removeFromCart';
import increaseCartItemQty from '../actions/increaseCartItemQty';
import CustomButton from './CustomButton';
import getTotalOrderPrice from '../helpers/getTotalOrderPrice';

function Cart() {
  const { data } = useFetch(process.env.NEXT_PUBLIC_PRODUCTS_URL);
  const [cart] = useGetLSCart();
  const router = useRouter();
  const cartPrices = cart?.map((each) => {
    const foundItem = data?.data?.find((item) => item.id === each.id);
    return { ...each, price: foundItem?.price * each.quantity };
  });
  const totalPrice = getTotalOrderPrice(cartPrices);

  return (
    <Box className="w-1/4 myShadow rounded-xl sticky top-0 px-4 pb-4 max-h-[500px] overflow-auto">
      <h3 className="text-center text-2xl"> Your Cart </h3>
      {data.data?.length && cart?.length
        ? (
          <>
            {cart?.map((item) => {
              const completeItemDetails = data?.data?.find((each) => each.id === item.id);
              const isLastItem = item.id === cart[cart.length - 1].id;
              return (
                <Box key={item.id}>
                  <CartItem
                    key={item.id}
                    isLastItem={isLastItem}
                    item={item}
                    completeItemDetails={completeItemDetails}
                  />
                </Box>
              );
            })}
            <Box data-testid="order_btn" className="flex justify-center" mt={4}>
              <CustomButton onClick={() => router.push('/checkout')}>
                {`Order ${cart?.length} for NGN ${totalPrice}`}
              </CustomButton>
            </Box>
          </>
        )
        : <EmptyState />}

    </Box>
  );
}

function CartItem({ item, completeItemDetails, isLastItem }) {
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
          <p data-testid="quantity_at_cart" className="font-semibold">
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
            {completeItemDetails?.price ? (completeItemDetails?.price * item?.quantity) : 'Loading...'}
          </p>
        </Box>
      </Stack>
      <div className="flex justify-between items-center py-4">
        <Box data-testid="reduce_qty_btn">
          <CartIconBtn handleClick={() => removeFromCart(item?.id, item?.quantity)}>
            <RemoveIcon />
          </CartIconBtn>
        </Box>
        <Box data-testid="add_qty_btn">
          <CartIconBtn handleClick={() => increaseCartItemQty(item?.id)}>
            <AddIcon />
          </CartIconBtn>
        </Box>
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
