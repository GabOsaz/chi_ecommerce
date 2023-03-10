import Cart from '../components/Cart';
import ProductHeader from '../components/ProductHeader';
import ProductList from '../components/ProductList';
import AppContainer from '../containers/AppContainer';
import ProductListContainer from '../containers/ProductListContainer';

export default function Home() {
  return (
    <AppContainer>
      <ProductListContainer>
        <ProductHeader />
        <ProductList />
      </ProductListContainer>
      <Cart />
    </AppContainer>
  );
}
