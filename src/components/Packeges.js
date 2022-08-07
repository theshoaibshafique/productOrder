import { Box } from '@mui/material';
import React from 'react';

const Packeges = ({ product, setProduct }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        background: '#fff',
        p: { xs: '10px', md: '40px' },
      }}
    >
      {product?.packages?.map((item) => (
        <Box key={item.id}>
          <img
            src={item.image}
            alt=""
            style={{ objectFit: 'cover', maxWidth: '100%' }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Packeges;
