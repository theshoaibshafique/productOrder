import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  TextField,
  Button,
  Typography,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { db } from '../firebase/Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import Select from '@mui/material/Select';

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
  const [submited, setSubmited] = useState(false);

  const hadnleSubmit = async (e) => {
    e.preventDefault();
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
    setSubmited(true);
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

  const OrderSubmission = () => {
    return (
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '95%',
          border: '5px solid black',
          m: '10px',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: '700' }}>
          Thank You!
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: '700', mb: '30px' }}
          gutterBottom
        >
          Your Order has been Placed.
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: '700' }} gutterBottom>
          You will get Home Delivery <br /> 2-3 Working Days
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ background: 'white', flex: 1 }} id="form">
      {submited ? (
        <OrderSubmission />
      ) : (
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
          <form onSubmit={hadnleSubmit}>
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
              <Box sx={{ textAlign: 'left' }}>
                <FormControl fullWidth>
                  <InputLabel id="quantity">Quantity</InputLabel>
                  <Select
                    id="quantity"
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
                </FormControl>
              </Box>
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
              //   onClick={hadnleSubmit}
              type="submit"
            >
              Order Now
            </Button>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default OrderForm;
