import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import { Fade } from "react-reveal";

const RecommendCard = ({ data }) => {
  return (
    <Col lg="3" className="my-4">
      <Fade duration={2000}>
        <Card className="card-lift--hover mb-2 text-center rounded-4">
          <CardBody className="align-items-center">
            <img
              src={data.logo}
              href={data.link}
              style={{
                objectFit: "contain",
                left: 0,
                right: 0,
                top: "10rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: "5rem",
                height: "5rem",
                borderRadius: "10%",
              }}
              alt={data.logo}
            />
            <a href={data.link} className="stretched-link"></a>
            <CardTitle tag="h5" className="mt-4 mb-1" id="section-title">
              <strong>{data.name}</strong>
            </CardTitle>
            <CardSubtitle tag="p" className="mb-3" id="section-title">
              {data.subtitle}
            </CardSubtitle>
            <CardText tag="div" className="description my-3 text-center">
              {data.desc}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default RecommendCard;
