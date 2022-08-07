import { Box } from '@mui/material';
import './App.css';
import ProductPage from './components/ProductPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Box>
   
    <BrowserRouter>
      <Routes>
        <Route path=":productname" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
      {/* <ProductPage productValues={allProducts[0]} /> */}
    </Box>
  );
}

export default App;
