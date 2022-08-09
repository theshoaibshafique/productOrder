import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Packeges from './Packeges';
import { useParams } from 'react-router-dom';
import OrderForm from './OrderForm';
import { allProducts } from './utils';

const ProductPage = () => {
  const [product, setProduct] = useState();
  let { productname } = useParams();

  useEffect(() => {
    const temp = allProducts.find((item) => {
      return item.name === productname;
    });
    setProduct(temp);
  }, [productname]);

  return (
    <Box
      sx={{
        mx: { md: '280px' },
      }}
    >
      <a
        href={`https://wa.me/+923239665525?text=I%27m%20api%20msg%20hello%20"`}
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Box>
        <img
          src={product?.images[0]}
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
            src={product?.images[1]}
            alt=""
            style={{ objectFit: 'cover', maxWidth: '100%' }}
          />
        </Box>
      </Box>

      {product?.images[2] && (
        <Box>
          <img
            src={product?.images[2]}
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
          style={{ objectFit: 'cover', maxWidth: '100%' }}
        />
      </Box>
    </Box>
  );
};

export default ProductPage;
