import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
  return (
    <Fade duration={2000}>
      <Card className="card-lift--hover mt-4 rounded-4">
        <CardBody>
          <div className="text-center">
            <img
              src={education.img}
              style={{
                width: "15%",
                height: "15%",
                borderRadius: "20%",
              }}
              alt=""
              className="img-fluid mb-4"
            />
          </div>
          <div className="pl-4 text-center">
            <h5 className="font-weight-bold">{education.schoolName}</h5>
            <h6>{education.subHeader}</h6>
            <p className="description">
              <em>{education.duration}</em>
            </p>
            <p className="description mt-3">{education.desc}</p>
            <ul className="list-unstyled">
              {education.descBullets
                ? education.descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
            {education.grade && (
              <Badge color="primary" className="mr-1" id="badge-title">
                {education.grade}
              </Badge>
            )}
            {education.grade2 && (
              <Badge color="primary" className="mr-1" id="badge-title">
                {education.grade2}
              </Badge>
            )}
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
