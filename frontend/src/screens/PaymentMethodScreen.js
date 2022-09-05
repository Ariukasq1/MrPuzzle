import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod }
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'PayPal'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);
  const submitHandler = e => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Төлбөрийн сонголт</title>
        </Helmet>
        <h1 className="my-3">Төлбөрийн сонголт</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="QPay"
              label="QPay"
              value="QPay"
              checked={paymentMethodName === 'QPay'}
              onChange={e => setPaymentMethod(e.target.value)}
              disabled={true}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Mobile bank"
              label="Mobile bank"
              value="Mobile bank"
              checked={paymentMethodName === 'Mobile bank'}
              onChange={e => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Үргэлжлүүлэх</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
