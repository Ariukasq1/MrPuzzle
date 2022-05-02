import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Миний сагс</title>
      </Helmet>
      <h1>Миний сагс</h1>

      <div class="row justify-content-start">
        <div class="col-8">
          {cartItems.length === 0 ? (
            <MessageBox>
              Сагс хоосон байна. <Link to="/">Бүтээгдэхүүн нэмэх</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>{item.price}₮</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
        <div class="col-4">
          <Card className="justify-content-between">
            <h5>
              Нийт бараа : {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
            </h5>
          </Card>
          <Card>
            <h5>Хүргэлт 5000 ₮</h5>
          </Card>
          <Card>
            <h5>
              Нийт үнэ :{' '}
              {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} ₮
            </h5>
          </Card>
          <div class="d-grid gap-2 mt-3">
            <Button
              class="btn btn-primary"
              type="button"
              variant="primary"
              className="btn "
              onClick={checkoutHandler}
              disabled={cartItems.length === 0}
            >
              Захиалга хийх
            </Button>
          </div>

          <Link to="/" className="deco">
            <div class="d-grid gap-2 mt-3">
              <Button variant="primary" class="btn btn-primary" type="button">
                Буцах
              </Button>
            </div>
          </Link>

          <div class="col-md-12"></div>
          <div class="col-1">
            <div className="mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
