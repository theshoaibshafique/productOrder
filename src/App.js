import { Box } from '@mui/material';
import './App.css';
import ProductPage from './components/ProductPage';
import { allProducts } from './components/utils';

function App() {
  return (
    <Box>
      <ProductPage productValues={allProducts[0]} />
    </Box>
  );
}

export default App;
