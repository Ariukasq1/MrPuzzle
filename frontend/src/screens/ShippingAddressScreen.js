import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import { TYPES } from '../constants';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [firstName, setFirstName] = useState(shippingAddress.firstName || '');
  const [lastName, setLastName] = useState(shippingAddress.lastName || '');
  const [email, setEmail] = useState(shippingAddress.email || '');
  const [phone, setPhone] = useState(shippingAddress.phone || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [duureg, setDuureg] = useState(shippingAddress.duureg || '');
  const [khoroo, setKhoroo] = useState(shippingAddress.khoroo || '');
  const [address, setAddress] = useState(shippingAddress.address || '');

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        duureg,
        khoroo,
        location: shippingAddress.location,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        city,
        duureg,
        khoroo,
        address,
        location: shippingAddress.location,
      })
    );
    navigate('/payment');
  };

  return (
    <div>
      <Helmet>
        <title>Хүргэлтийн хаяг</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Хүргэлтийн хаяг</h1>
        <Form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Нэр</Form.Label>
                <Form.Control
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Овог</Form.Label>
                <Form.Control
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Имэйл</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Утасны дугаар</Form.Label>
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Хот/Аймаг</Form.Label>
                <Form.Select onChange={(e) => setCity(e.target.value)} required>
                  {TYPES.map((type) => (
                    <option value={type.value}>{type.label}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3" controlId="duureg">
                <Form.Label>Дүүрэг/Сум</Form.Label>
                <Form.Control
                  value={duureg}
                  onChange={(e) => setDuureg(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3" controlId="khoroo">
                <Form.Label>Хороо/Баг</Form.Label>
                <Form.Control
                  value={khoroo}
                  onChange={(e) => setKhoroo(e.target.value)}
                  required
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Дэлгэрэнгүй хаяг</Form.Label>

                <textarea
                  italic={true}
                  placeholder="Б.З.Д-ийн 2-р хороо 83-р байр 2-р орц код:1234"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </Form.Group>
            </div>
          </div>

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Үргэлжлүүлэх
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
