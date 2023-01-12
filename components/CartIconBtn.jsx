import { green } from '@mui/material/colors';

function CartIconBtn({ children, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        color: 'white', background: green[500], cursor: 'pointer', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px',
      }}
    >
      {children}
    </button>
  );
}

export default CartIconBtn;
