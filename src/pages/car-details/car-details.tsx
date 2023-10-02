// import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { ICar } from "../../types/icar";
import { convertNumberToUSD } from "../../utils/format";
import { CarService } from "../../services/car.service";
import style from "./car-details.module.css";

export const CarDetais = () => {
  const { id } = useParams();
  const [car, setCar] = useState<ICar>({} as ICar);

  useEffect(() => {
    CarService.getCar(Number(id)).then((data) => {
      if (data) {
        setCar(data);
      }
    });
  }, [id]);

  return (
    <>
      <Row className="mt-4">
        <Col md="12" lg="6">
          <img
            src={car.image}
            className="img-fluid img-thumbnail"
            alt="Car Image"
          />
        </Col>
        <Col md="12" lg="6">
          <h1>
            {car.manufacturer} {car.model} ({car.year})
          </h1>
          <div className={style.price}>{convertNumberToUSD(car.price)}</div>
          <p className={style.description}>{car.description}</p>
        </Col>
      </Row>
    </>
  );
};

