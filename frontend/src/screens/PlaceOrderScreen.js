import React, { useContext, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import { TYPES } from '../constants';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const navigate = useNavigate();

  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = num => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );

  let deliver;

  TYPES.forEach(type => {
    if (type.value === cart.shippingAddress.city) {
      deliver = type.deliver;
    }
  });
  cart.totalPrice = cart.itemsPrice + deliver;
  console.log('DELIVER:', deliver);

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(
        '/api/orders',
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: deliver,
          totalPrice: cart.totalPrice
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`
          }
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart, navigate]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Захиалгын хэсэг</title>
      </Helmet>
      <h1 className="my-3">Захиалгын хэсэг</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Захиалга</Card.Title>
              <Card.Text>
                <strong>Нэр:</strong> {cart.shippingAddress.firstName} <br />
                <strong>Хаяг: </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.duureg},
                {cart.shippingAddress.khoroo}
              </Card.Text>
              <Link to="/shipping">Засах</Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Төлбөр</Card.Title>
              <Card.Text>
                <strong>Төрөл:</strong> {cart.paymentMethod}
              </Card.Text>
              <Link to="/payment">Засах</Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Бараанууд</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map(item => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>
                        {item && item.price && item.price.toLocaleString()}₮
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart">Засах</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Захиалгын нийлбэр</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Нийт барааны үнэ</Col>
                    <Col>
                      {cart &&
                        cart.itemsPrice &&
                        cart.itemsPrice.toLocaleString()}
                      ₮
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Хүргэлт</Col>
                    <Col>5000₮</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Нийт төлбөр</strong>
                    </Col>
                    <Col>
                      <strong>{cart.totalPrice.toLocaleString()}₮</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <div className="d-grid p-2">
                  <Button
                    type="button"
                    onClick={placeOrderHandler}
                    disabled={cart.cartItems.length === 0}
                  >
                    Захиалга хийх
                  </Button>
                </div>

                {loading && <LoadingBox></LoadingBox>}

                <Link to="/payment" className="deco">
                  <div className="d-grid p-2">
                    <Button type="button">Буцах</Button>
                  </div>
                </Link>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
