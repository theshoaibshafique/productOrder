import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Button,
  Typography,
  MenuItem,
} from '@mui/material';
import { db } from '../firebase/Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const OrderForm = ({ product }) => {
  const [values, setValues] = useState({
    productName: product.name,
    name: '',
    address: '',
    city: '',
    mobile: '',
    quantity: product.quantity,
    date: new Date().toLocaleString(),
  });
  const [submitting, setSubmitting] = useState(false);
  const handleClick = async () => {
    setSubmitting(true);
    await addDoc(collection(db, 'orders'), {
      ...values,
      date: new Date().toLocaleString(),
    });
    setValues({
      productName: product.name,
      name: '',
      address: '',
      city: '',
      mobile: '',
      quantity: product.quantity,
      date: new Date().toLocaleString(),
    });
    setSubmitting(false);
  };

  useEffect(() => {
    setValues({
      productName: product.name,
      name: '',
      address: '',
      city: '',
      mobile: '',
      quantity: product.quantity,
      date: Timestamp.now(),
    });
  }, [product]);

  return (
    <Box sx={{ background: 'white', flex: 1 }} id="form">
      <Box
        sx={{
          border: '5px solid black',
          px: { xs: '10px', md: '10px' },
          py: { xs: '5px', md: '5px' },
          mx: { xs: '5px', md: '10px' },
          my: { xs: '5px', md: '10px' },
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: '700' }}>
          Confirm Your Order
        </Typography>
        <Box sx={{ background: '#076e38', color: 'white', py: '10px' }}>
          <Typography variant="h5" sx={{ fontWeight: '800' }}>
            Your Shipping Address
          </Typography>
        </Box>
        <FormControl
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            p: '10px',
            border: '1px solid black',
          }}
        >
          <TextField
            variant="outlined"
            required
            label=" Your Name"
            name="name"
            value={values.name}
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            required
            label=" Your Address"
            name="address"
            value={values.address}
            onChange={(e) => {
              setValues({ ...values, address: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            required
            label=" Your City"
            name="city"
            value={values.city}
            onChange={(e) => {
              setValues({ ...values, city: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            required
            label=" Your Mobile#"
            name="mobile"
            value={values.mobile}
            onChange={(e) => {
              setValues({ ...values, mobile: e.target.value });
            }}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.quantity}
            label="Quantity"
            onChange={(e) => {
              setValues({ ...values, quantity: e.target.value });
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          {/* <TextField
            variant="outlined"
            required
            label=" Quantity"
            type="number"
            name="quantity"
            value={values.quantity}
            onChange={(e) => {
              setValues({ ...values, quantity: e.target.value });
            }}
          /> */}

          <Typography variant="h5" sx={{ fontWeight: '700' }}>
            Rs. {product.price}{' '}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: '700', color: 'red' }}>
            Free Home Delivery
          </Typography>
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: '5px',
            fontWeight: '700',
            fontSize: '20px',
            background: '#076e38',
            '&:hover': {
              background: '#000',
            },
          }}
          disabled={submitting}
          onClick={handleClick}
        >
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

export default OrderForm;
