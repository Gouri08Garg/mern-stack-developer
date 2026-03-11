// src/components/SliderModal.jsx

import React from "react";
import { Modal, Carousel } from "react-bootstrap"; 

const SliderModal = ({ show, slides, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Slideshow</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Carousel>
          {slides.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                src={img}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default SliderModal;
