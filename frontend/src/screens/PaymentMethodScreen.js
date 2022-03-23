import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import Helmet from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function PaymentMethodScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Төлбөрийн сонголт</title>
        </Helmet>
        <h1 className="my-3"> Төлбөрийн сонголт</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="PayPal"
              label="PayPal"
              value="PayPal"
              checked={paymentMethodName === 'PayPal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
          <div className="mb-e">
            <Button type="submit">Үргэлжлүүлэх</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
