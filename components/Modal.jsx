/* eslint-disable no-unsafe-optional-chaining */
import {
  Box, Divider, Stack,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import IconButton from './IconButton';
import CustomButton from './CustomButton';
import useResetQty from '../customHooks/useResetQty';
import { DataContext } from '../AppContext/DataContext';
import addToCart from '../actions/addToCart';

function CustomModal({
  data, open, setOpen,
}) {
  const dataContext = useContext(DataContext);
  const { quantity, setQuantity } = dataContext;
  useResetQty(setQuantity, open);
  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    borderRadius: '12px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...style }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {/* <<< Left Section */}
          <Box sx={{ width: '50%' }}>
            <h2 id="modal-title">{data?.title}</h2>
            <p id="modal-description">
              {data?.description}
            </p>
          </Box>

          {/* Right Section >>> */}
          <Box
            sx={{
              width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
            className="flex justify-center"
          >
            <img style={{ maxHeight: '40%', maxWidth: '50%' }} src={data?.image} alt={data?.category} />
            <Box mt={6}>
              <h3 style={{ textAlign: 'center' }}>
                {`NGN ${data?.price}`}
              </h3>
              <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
                <IconButton setQuantity={() => setQuantity((prev) => prev - 1)} qty={quantity}>
                  <RemoveIcon />
                </IconButton>
                <p data-testid="quantity">
                  {quantity}
                </p>
                <Box data-testid="increase_btn">
                  <IconButton
                    qty={quantity + 1}
                    setQuantity={() => setQuantity((prev) => prev + 1)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Stack>
              <Box mt={4}>
                <CustomButton data-testid="add_btn" onClick={() => addToCart(data?.id, quantity, setOpen)}>
                  {`Add ${quantity} for NGN ${(data?.price * quantity).toFixed(2)}`}
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}

export default CustomModal;
