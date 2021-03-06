import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys.js';

// MATERIAL UI
import { Box, Typography, FormControl, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { CustomOutlinedInput } from '../../styles/Theme.style.js';
import { cardElementOptions } from '../../styles/Admin.style.js';

// REDUX
import { useDispatch } from 'react-redux';
import {
  changeRagisterUser,
  getAllUsers,
} from '../../redux/slices/userSlice.js';
import { useSelector } from 'react-redux';
import { openModal } from '../../redux/slices/elementsSlice.js';

// STRIPE
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Register(props) {
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.registerableUser);

  // CREATE NEW USER
  const handleSubmit = async (e) => {
    e.preventDefault();

    // STRIPE SETUP
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    console.log('Card - ', cardElement);
    console.log('Stripe - ', stripe);

    try {
      const createPaymentIntent = await axios.get(
        `${BACKEND_URL}/user/register-payment-intent`
      );
      console.log('Create Payment Intent ', createPaymentIntent);

      // CONFIRM PAYMENT ON THE CLIENT
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(createPaymentIntent.data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

      if (stripeError) {
        // console.log("Stripe error - ", stripeError);
        return;
      }

      console.log('Payment Intent ', paymentIntent);
      console.log('Payment Intent status ', paymentIntent.status);
      console.log('Payment Intent id ', paymentIntent.id);
    } catch (error) {
      console.log(error);
      dispatch(
        openModal({ heading: 'Payment Incomplete', body: error.message })
      );
      return;
    }

    /*
        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            // console.log(result.error.message);
            dispatch(openModal({ heading: "Payment Incomplete", body: result.error.message }));
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            if (userInfo.name === '' || userInfo.email === '' || userInfo.password === '' || userInfo.password2 === '' || userInfo.name === null || userInfo.email === null || userInfo.password === null || userInfo.password2 === null) {
                // console.log("Working - ", userInfo);
                // ERROR 
                let errors = 'Errors: ';
                if (userInfo.name === '' || userInfo.name === null) errors += " User name can not be empty, ";
                if (userInfo.email === '' || userInfo.email === null) errors += " User email can not be empty, ";
                if (userInfo.passowrd === '' || userInfo.passowrd === null) errors += " User passowrd can not be empty, ";
                if (userInfo.passowrd2 === '' || userInfo.passowrd2 === null) errors += " Confirm passowrd can not be empty, ";
                dispatch(openModal({ heading: "invalid user", body: errors }));
            } else if (userInfo.password.length < 6) {
                dispatch(openModal({ heading: "Invalid password", body: "Password must be more 6 or more than 6 charecter long" }));
            } else if (userInfo.password !== userInfo.password2) {
                dispatch(openModal({ heading: "password did not match", body: "Make sure you use same password in both field" }));
            } else {
                // dispatch(registerNewUser(userInfo));
                // console.log(userInfo);
                // // SUCCESS 
                // let submitableUser = userInfo;
                // submitableUser.role = userRole;

                // "Salah1234"    "Salah1234"
                try {
                    const token = localStorage.getItem('token');
                    let response = null;
                    let superUser = false;
                    if (token) {
                        const role = JSON.parse(localStorage.getItem('user')).role;
                        if (role === "SUPER") {
                            // CREATE USER FROM ADMIN
                            const config = {
                                headers: {
                                    'Authorization': `Bearer ${token}`,
                                    'Content-Type': 'application/json'
                                },
                                // data: JSON.stringify(submitableUser)
                            };
                            response = await axios.post(`${BACKEND_URL}/user/register-stuff`, userInfo, config);
                            superUser = true;
                        }
                    } else {
                        // CREATE USER FROM CONTEST 
                        const config = {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            // data: JSON.stringify(userInfo)
                        };
                        // http://localhost:4000/api/user/register-general
                        console.log(`${BACKEND_URL}/user/register-general`);
                        response = await axios.post(`${BACKEND_URL}/user/register-general`, userInfo, config);
                    }



                    if (response.status === 200 || response.status === 201) {
                        if (superUser === true) {
                            dispatch(getAllUsers());
                            dispatch(openModal({ heading: "Success", body: "User is been made successfully!" }));
                        } else {
                            dispatch(openModal({ heading: "Success", body: "Registration is complete now you can login!" }));
                        }
                    } else if (response.status === 208) {
                        dispatch(openModal({ heading: "User already exist!", body: "Use another email address to create new user" }));
                    } else if (response.status === 401) {
                        localStorage.clear();
                        dispatch(openModal({ heading: "Token expired", body: "Please reload the page and login once again" }));
                    }
                    e.target.reset();
                } catch (error) {
                    console.log(error);
                    if (error.response.status === 401) {
                        localStorage.clear();
                        // navigate('/login');
                    }
                }
            }
        }

        */
  };

  const inputChangeHandler = (e) => {
    dispatch(
      changeRagisterUser({ name: e.target.name, value: e.target.value })
    );
  };

  return (
    <Box
      component="form"
      sx={{ backgroundColor: '#24242a' }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h2" mb={5} pt={5} color="error">
        {props.title}
      </Typography>
      <Typography variant="h6" color="error">
        Register with $50 to upload your screenplay
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <CustomOutlinedInput
          sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }}
          fullWidth
          type="text"
          name="name"
          onChange={inputChangeHandler}
          required
          color="error"
          placeholder="Name"
        />
        <CustomOutlinedInput
          sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }}
          fullWidth
          type="email"
          name="email"
          required
          color="error"
          onChange={inputChangeHandler}
          placeholder="email"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginBottom: 2,
          alignItems: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <CustomOutlinedInput
          sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }}
          fullWidth
          type="password"
          name="password"
          onChange={inputChangeHandler}
          required
          color="error"
          placeholder="Password"
        />
        <CustomOutlinedInput
          sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }}
          fullWidth
          type="password"
          name="password2"
          onChange={inputChangeHandler}
          required
          color="error"
          placeholder="Confirm Password"
        />
      </Box>

      {/* STRIPE ELEMENT  */}
      <CardElement
        options={cardElementOptions}
        style={{ border: '1px solid blue' }}
      />

      <FormControl
        margin="dense"
        justify="center"
        align="center"
        fullWidth={true}
      >
        <Box textAlign="center" my={5}>
          <Button
            variant="contained"
            color="error"
            type="submit"
            endIcon={<ArrowForward />}
            sx={{ textTransform: 'capitalize' }}
          >
            {' '}
            Add{' '}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

export default Register;
