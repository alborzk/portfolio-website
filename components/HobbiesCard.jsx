import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";
import { Fade } from "react-reveal";
import { Icon } from "@iconify/react";

const HobbiesCard = ({ data }) => {
  return (
    <Col lg="3" className="my-4">
      <Fade duration={2000}>
        <Card className="card-lift--hover mb-3 text-center rounded-4">
          <CardBody className="align-items-center">
            <Icon
              icon={data.icon}
              data-inline="false"
              width="100px"
              height="100px"
            ></Icon>
            <CardTitle tag="h4" className="mt-4 mb-1" id="section-title">
              <strong>{data.name}</strong>
            </CardTitle>
            <CardText tag="div" className="description my-3 text-center">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return (
                        <li key={desc}>
                          <strong>{desc}</strong>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default HobbiesCard;
