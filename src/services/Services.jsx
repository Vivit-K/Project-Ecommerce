import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./services.css";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.11 }}
                className="service__item"
                // ovo je za boju ako oces sivu kao header samo obrisi style//
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
