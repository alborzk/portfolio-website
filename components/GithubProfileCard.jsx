import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { Bounce } from "react-reveal";
import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-dark shadow-lg border-0">
      <Container>
        <Bounce>
          <Row>
            <Col lg="8">
              <h2 className="display-3 text-white">Let&rsquo;s connect!</h2>
              <p className="lead text-white mt-3">
                Feel free to send me an email, or connect with me at any of the links below!
              </p>
              <SocialLinks />
            </Col>
            <Col lg="4" className="d-flex justify-content-center">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
          </Row>
        </Bounce>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
