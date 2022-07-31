import {Link,} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext} from 'react';

import SearchBox from './SearchBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Store } from '../Store';

const HeaderMenu = ({sidebarIsOpen,setSidebarIsOpen,cart, userInfo }) => {

    const {  dispatch: ctxDispatch } = useContext(Store);
     const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

    return (
        <div
        className="flex flex-column width-100"
            // className="d-flex align-items-center bd-highlight mb-3 example-parent hemjee1"
            // style={{ height: '200px' }}
        >
            <div className='flex flex-around width-100'>
                <div className="flex flex-center">
                            <div className="p-2 bd-highlight col-example  ">
                                <Button
                                className="sidebar"
                                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                                >
                                <i className="fas fa-bars sidebar"></i>
                                </Button>
                            </div>

                            <div className="p-2 bd-highlight col-example">
                                <div className="">
                                <Link to="/">
                                    <a class="navbar-brand" href="/">
                                    <img
                                        src="/images/mr.png"
                                        width="150"
                                        height="50"
                                        class="d-inline-block align-top img-cover"
                                        alt=""
                                    />
                                    </a>
                                </Link>
                                </div>
                            </div>
                            {/* <div className="p-2 bd-highlight col-example show-tablet">
                                <h5>MR Puzzle Shop</h5>
                            </div> */}
                </div>
                <div className="flex flex-center show-tablet">
                    <div className="p-2 bd-highlight col-example justify-content-center">
                        <SearchBox />
                    </div>
                </div>
                <div className="flex flex-center">
                <div className=" bd-highlight col-example">
                    <Link to="/cart" className="nav-link flex flex-center pos-relative" >
                        <img
                            src="/images/icons8-shopping-cart-100.png"
                            alt="cart"
                            className="shopping-cart"
                        />
                        {cart.cartItems.length > 0 && (
                            <Badge pill bg="danger" className='badge'>
                            {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </Badge>
                        )}
                    </Link>
                </div>
                <div className="p-2 bd-highlight col-example show-tablet">
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
            
            <div className="flex flex-center show-mobile width-100">
                <div className="p-2 bd-highlight col-example justify-content-center search-mobile  margin-auto">
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;