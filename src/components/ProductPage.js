import React, { useState } from 'react';

import { Box } from '@mui/material';
import Packeges from './Packeges';

import OrderForm from './OrderForm';

const ProductPage = ({ productValues }) => {
  const [product, setProduct] = useState(productValues);

  return (
    <Box
      sx={{
        mx: { md: '280px' },
      }}
    >
      <Box>
        <img
          src={product.images[0]}
          lazy
          alt=""
          style={{ objectFit: 'cover', maxWidth: '100%' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {product?.name && <OrderForm product={product} />}

        <Box sx={{ flex: '1.5' }}>
          <img
            src={product.images[1]}
            lazy
            alt=""
            style={{ objectFit: 'cover', maxWidth: '100%' }}
          />
        </Box>
      </Box>

      {product.images[2] && (
        <Box>
          <img
            src={product.images[2]}
            lazy
            alt=""
            style={{ objectFit: 'cover', maxWidth: '100%' }}
          />
        </Box>
      )}

      <Packeges product={product} setProduct={setProduct} />

      <Box>
        <img
          src="./images/FOOTER_OF_NEURITE.webp"
          alt=""
          lazy
          style={{ objectFit: 'cover', maxWidth: '100%' }}
        />
      </Box>
    </Box>
  );
};

export default ProductPage;
