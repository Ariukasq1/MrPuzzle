import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }
  } = state;

  const addToCartHandler = async item => {
    const existItem = cartItems.find(x => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://polar-lake-47657.herokuapp.com/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert('Уучлаарай энэ бараа дууссан байна.');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }
    });
  };

  return (
    <Card className="height-100">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body className="card-body flex flex-column flex-between">
        <Link to={`/product/${product.slug}`} className="card-body-mine">
          <Card.Title>
            <div className="typo-medium typo-weight-600 no-wrap">
              {product.name}
            </div>
          </Card.Title>
        </Link>

        <Card.Text>
          <div className="textColor typo-medium">
            {product.price.toLocaleString()}₮
          </div>
        </Card.Text>
        {/* 
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Дууссан
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(product)}
            className="typo-small"
          >
            Сагс руу нэмэх
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default Product;
