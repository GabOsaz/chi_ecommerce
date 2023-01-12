import { green, grey } from '@mui/material/colors';

function IconButton({ children, qty, setQuantity }) {
  return (
    <button
      disabled={qty < 2}
      type="button"
      onClick={setQuantity}
      style={{
        color: 'white', background: qty < 2 ? grey[200] : green[500], cursor: 'pointer', borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px',
      }}
    >
      {children}
    </button>
  );
}

export default IconButton;
