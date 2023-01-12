import { createContext, useState } from 'react';

const DataContext = createContext();
const { Provider } = DataContext;

function DataProvider({ children }) {
  const naira = '₦';
  const [quantity, setQuantity] = useState(1);

  return (
    <Provider
      value={{
        naira,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </Provider>
  );
}

export { DataContext, DataProvider };
