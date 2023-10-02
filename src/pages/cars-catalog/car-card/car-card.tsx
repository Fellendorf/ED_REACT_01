import { Card, Col } from "react-bootstrap";

import styles from "./car-card.module.css";
import { ICar } from "../../../types/icar";
import { convertNumberToUSD } from "../../../utils/format";

export const CarCard = ({
  car: { id, manufacturer, model, price, description, image, year },
}: {
  car: ICar;
}) => {
  return (
    <Col
      md="6"
      lg="4"
      className="p-1 d-flex align-items-stretch "
      aria-hidden="true"
    >
      <Card>
        <Card.Img
          variant="top"
          src={image || "./placeholder.webp"}
          className={styles.cardImg}
        ></Card.Img>
        <Card.Body className="active">
          <Card.Title>
            <a href={`/cars-catalog/car-details/${id}`} className="active">
              {manufacturer} {model} ({year})
            </a>
          </Card.Title>
          <Card.Subtitle>{convertNumberToUSD(price)}</Card.Subtitle>
          <Card.Text className={styles.description}>{description}</Card.Text>
          <Card.Text className={styles.description}>
            <a href={`/cars-catalog/car-details/${id}`}>Read more</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

