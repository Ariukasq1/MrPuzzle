import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import SearchBox from './components/SearchBox';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import SearchScreen from './screens/SearchScreen';
import ShippingPrivacy from './screens/ShippingPrivacy';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get('/api/products/categories');
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
        id="sidebar"
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header className="nvbar">
          <Navbar bg="white" variant="faded" expand="lg" className="hemjee">
            <div
              className="d-flex align-items-center bd-highlight mb-3 example-parent hemjee1"
              style={{ height: '200px' }}
            >
              <div className="item1">
                <div className="p-2 bd-highlight col-example  ">
                  <Button
                    className="sidebar"
                    onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                  >
                    <i className="fas fa-bars sidebar"></i>
                  </Button>
                </div>

                <div className="p-2 bd-highlight col-example">
                  {' '}
                  <div className="nav-menu">
                    <Link to="/">
                      <a class="navbar-brand" href="/">
                        <img
                          src="/images/mr.png"
                          width="150"
                          height="150"
                          class="d-inline-block align-top"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="p-2 bd-highlight col-example">
                  {' '}
                  <h5>MR Puzzle Shop</h5>
                </div>
              </div>
              <div className="item2">
                <div className="p-2 bd-highlight col-example justify-content-center">
                  <SearchBox />
                </div>
              </div>
              <div className="item3">
                <div className="p-2 bd-highlight col-example">
                  {' '}
                  <Link to="/cart" className="nav-link">
                    <img
                      src="/images/icons8-shopping-cart-100.png"
                      alt="cart"
                      className="shopping-cart"
                    />
                    Сагс
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </div>
                <div className="p-2 bd-highlight col-example">
                  <img
                    src="/images/icons8-customer-100.png"
                    alt="user"
                    className="shopping-cart"
                  />
                </div>
                <div className="p-2 bd-highlight col-example">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Row className="w-100 ">
                      <Col span={4}>
                        {' '}
                        <Nav className="bairshil">
                          <div>
                            {userInfo ? (
                              <NavDropdown
                                title={userInfo.name}
                                id="basic-nav-dropdown"
                              >
                                <LinkContainer to="/profile">
                                  <NavDropdown.Item>
                                    Хэрэглэгчийн тохиргоо
                                  </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/orderhistory">
                                  <NavDropdown.Item>
                                    Захиалгын түүх
                                  </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <Link
                                  className="dropdown-item"
                                  to="#signout"
                                  onClick={signoutHandler}
                                >
                                  Гарах
                                </Link>
                              </NavDropdown>
                            ) : (
                              <Link className="nav-link" to="/signin">
                                Нэвтрэх
                              </Link>
                            )}
                            {userInfo && userInfo.isAdmin && (
                              <NavDropdown
                                title="Админ"
                                id="admin-nav-dropdown"
                              >
                                <LinkContainer to="/admin/dashboard">
                                  <NavDropdown.Item>
                                    Хянах самбар
                                  </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/products">
                                  <NavDropdown.Item>Бараанууд</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/orders">
                                  <NavDropdown.Item>
                                    Захиалгууд
                                  </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/admin/users">
                                  <NavDropdown.Item>
                                    Хэрэглэгчид
                                  </NavDropdown.Item>
                                </LinkContainer>
                              </NavDropdown>
                            )}
                          </div>
                        </Nav>
                      </Col>
                    </Row>
                  </Navbar.Collapse>
                </div>
              </div>
            </div>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-coloumn text-white w-100 p-2">
            <Nav.Item>
              <strong>Төрөл</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mx-6">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>

          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>

              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/shippingprivacy"
                element={<ShippingPrivacy />}
              ></Route>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
            </Routes>
          </Container>
          <Routes></Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
