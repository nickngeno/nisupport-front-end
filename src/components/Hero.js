import React from "react";
import {Container, Button} from "react-bootstrap";
import heroImg from '../images/tony-rojas.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="herowrapper">
        <div className="heroLeft">
            <h2 className="title">The largest community of Music enthuasiasts</h2>
            <h4>Why not get engaged to your real fans?</h4>
            <Button className="btn-custom mt-2">GetStarted </Button>
        </div>
        <div className="heroRight">
            <img src={heroImg} alt=""/>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
