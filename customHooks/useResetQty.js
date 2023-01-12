import { useEffect } from 'react';

function useResetQty(setQuantity, open) {
  useEffect(() => () => {
    setQuantity(1);
  }, [open]);
  return (null);
}

export default useResetQty;
