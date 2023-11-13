import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { getError } from '../utils';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default function OrderScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();
  const [lgShow, setLgShow] = useState(true);

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `http://localhost:5001/api/orders/${orderId}`,
          {
            headers: { authorization: `Bearer ${userInfo.token}` }
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (!userInfo) {
      return navigate('/login');
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);

  //http://localhost:3000/order/629437cac26fa557a8c7de84
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id=""></Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-title">
          <div className="general">
            <h5>Төлбөр төлөх заавар</h5>
            <br />
            <h6>Захиалгын дүн</h6>
            <strong>
              <h4>{order.totalPrice.toLocaleString()}₮</h4>
            </strong>
            <br />
            <h6>Төлбөрийн нөхцөл</h6>
            <h3>Дансаар шилжүүлэх</h3>
            <br />
          </div>
          <div className="tomDiv">
            <Row className="dans">
              <Col>
                <div className="textLine">Банк:</div>
                <div className="textLine">Хүлээн авагч</div>
                <div className="textLine">Дансны дугаар</div>
              </Col>
              <Col>
                <div className="textLine">Хаан Банк </div>
                <div className="textLine">Самбуудолгор Батэрдэнэ</div>
                <div className="textLine">
                  <strong>5400564035</strong>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tomDiv">
            <Row className="guilgeenii-utga">
              <Col>
                <div className="textLine">Гүйлгээний утга:</div>
                <div className="textLine">Шилжүүлэх дүн: </div>
              </Col>
              <Col>
                <div className="textline">R1234D89 </div>
                <div className="textline">
                  {order.totalPrice.toLocaleString()}₮
                </div>
              </Col>
            </Row>
          </div>
          <br />
          <div className="delgerengui">
            <p>
              Төлбөр төлөгдсөний дараа таны захиалга идэвхжихийг анхаарна уу!
              Төлбөрийг дээрх дансанд шилжүүлэх ба захиалгын {order._id}{' '}
              дугаарыг гүйлгээний утга дээр бичнэ үү.
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <Helmet>
        <title>Захиалга {orderId}</title>
      </Helmet>
      <h1 className="my-3">Захиалга {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Хүргэлт</Card.Title>
              <Card.Text>
                <strong>Нэр:</strong> {order.shippingAddress.firstName} <br />
                <strong>Хаяг: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.duureg},
                {order.shippingAddress.khoroo}
              </Card.Text>
              {order.isDelivered ? (
                <MessageBox variant="success">
                  Захиалга хүргэгдсэн {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Хүргэгдээгүй</MessageBox>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Төлбөр</Card.Title>
              <Card.Text>
                <strong>Сонголт:</strong> {order.paymentMethod}
              </Card.Text>

              {order.isPaid ? (
                <MessageBox variant="success">
                  Төлбөр төлөгдсөн {order.paidAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Баталгаажаагүй</MessageBox>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Бараанууд</Card.Title>
              <ListGroup variant="flush">
                {order.orderItems.map(item => (
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
                      <Col md={3}>{item.price}₮</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Захиалгын нийлбэр</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Бараанууд</Col>
                    <Col>{order.itemsPrice.toLocaleString()}₮</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Хүргэлт</Col>
                    <Col>{order.shippingPrice.toLocaleString()}₮</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Захиалгын нийт дүн</strong>
                    </Col>
                    <Col>
                      <strong>{order.totalPrice.toLocaleString()}₮</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <div class="d-grid gap-2 mt-3">
            <Button
              class="btn btn-primary"
              type="button"
              variant="primary"
              className="btn "
              onClick={''}
              disabled={''}
            >
              Төлбөр хүлээгдэж байна
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
