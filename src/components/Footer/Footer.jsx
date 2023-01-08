import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Vicomart</h1>
              </div>
            </div>
            <p className="footer__text mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              fugit aut mollitia aspernatur animi nam at laboriosam ea quisquam
              quis?
            </p>
          </Col>
          <Col lg="3" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title ">Categories</h4>
              <ListGroup className="mb-3 d-flex align-items-front gap-2">
                <ListGroupItem className=" mt-2 ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">TVs</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Watches</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Wireless Headphones</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3 d-flex align-items-front gap-2">
                <ListGroupItem className=" mt-2 ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title ">Contact</h4>
              <ListGroup className=" footer__contact mb-3 d-flex align-items-front gap-2">
                <ListGroupItem className=" mt-2 ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>1234 Skopje 1000</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+122322433444</p>
                </ListGroupItem>
                <ListGroupItem className=" ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>vicomart@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center">
              Copyright {year} developed by Vivit Kalach. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
