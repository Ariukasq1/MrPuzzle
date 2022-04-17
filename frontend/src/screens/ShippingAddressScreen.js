import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/shipping');
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullName,
        address,
        city,
        country,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        country,
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
      <div className="container">
        <h1 className="my-3">Хүргэлтийн хаяг</h1>

        <Form onSubmit={submitHandler}>
          <form>
            <div class="row justify-content-start">
              <div class="col-4">
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>Нэр</Form.Label>
                  <Form.Control
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-4">
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>Овог</Form.Label>
                  <Form.Control
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-4">
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>И-Мэйл</Form.Label>
                  <Form.Control
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
              <div class="col-4">
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>Утасны дугаар</Form.Label>
                  <Form.Control
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-8">
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Хаяг</Form.Label>
                  <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-4">
                <Form.Group className="mb-3" controlId="address">
                  <div class="form-group">
                    <Form.Label>Хот/Аймаг</Form.Label>

                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Улаанбаатар хот</option>
                      <option>Архангай аймаг</option>
                      <option>Баян-өлгий аймаг</option>
                      <option>Баянхонгор аймаг</option>
                      <option>Булган аймаг</option>
                      <option>Говь-алтай аймаг</option>
                      <option>Дорноговь аймаг</option>
                      <option>Дорнод аймаг</option>
                      <option>Дундговь аймаг</option>
                      <option>Завхан аймаг</option>
                      <option>Өвөрхангай аймаг</option>
                      <option>Өмнөговь аймаг</option>
                      <option>Сүхбаатар аймаг</option>
                      <option>Сэлэнгэ аймаг</option>
                      <option>Төв аймаг</option>
                      <option>Увс аймаг</option>
                      <option>Ховд аймаг</option>
                      <option>Хөвсгөл аймаг</option>
                      <option>Хэнтий аймаг</option>
                      <option>Дархан-уул аймаг</option>
                      <option>Орхон аймаг</option>
                      <option>Говьсүмбэр аймаг</option>
                    </select>
                  </div>
                </Form.Group>
              </div>
              <div class="col-4">
                <Form.Group className="mb-3" controlId="address">
                  <div class="form-group">
                    <Form.Label>Дүүрэг/Сум</Form.Label>
                    <Form.Control
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
            </div>

            <div class="row justify-content-start">
              <div class="col-4">
                <Form.Group className="mb-3" controlId="address">
                  <div class="form-group">
                    <Form.Label>Хороо/Баг</Form.Label>
                    <Form.Control
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-8">
                <Form.Group className="mb-3" controlId="address">
                  <div class="form-group">
                    <Form.Label>Дэлгэрэнгүй хаяг</Form.Label>

                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </Form.Group>
              </div>
            </div>

            <div class="row justify-content-start">
              <div class="col-2">
                <div className="mb-3">
                  <Button variant="primary" type="submit">
                    Үргэлжлүүлэх
                  </Button>
                </div>
              </div>
              <div class="col-1">
                <div className="mb-3">
                  <Button variant="primary" type="submit">
                    Буцах
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}
