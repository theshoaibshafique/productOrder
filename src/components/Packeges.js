import { Box } from '@mui/material';
import React from 'react';

const Packeges = ({ product, setProduct }) => {

  // const handleClick = async()=>{
  // //  if( document.getElementById('form')!=null) document.getElementById('form').scrollIntoView();
  //   // setProduct({
  //   //   ...product,price:item.price,quantity:item.quantity
  //   // })
  // }

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
        <Box key={item.id} sx={{
           '&:hover':{
          cursor:'pointer'
        }
        }}
     
        >
          <img
            src={item.image}
            alt=""
            style={{ objectFit: 'cover', maxWidth: '100%' }}
            onClick={()=>{
  
          if( document.getElementById('form')!=null) document.getElementById('form').scrollIntoView();
          setProduct({
            ...product,price:item.price,quantity:item.quantity
          })
     
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Packeges;
