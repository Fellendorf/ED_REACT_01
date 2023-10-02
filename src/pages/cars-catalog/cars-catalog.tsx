import { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";

import { CarCard } from "./car-card/car-card";
import { CarService } from "../../services/car.service";
import { ICar } from "../../types/icar";
import { Loader } from "../../components/common/loader/loader";
import { AddNewCarModal } from "./add-new-car-modal/add-new-car-modal";

type CarsCatalogState = {
  loading: boolean;
  showAddCarModal: boolean;
};

export const CarsCatalog = () => {
  const [state, setState] = useState<CarsCatalogState>({
    loading: false,
    showAddCarModal: false,
  });
  const addCarModalShowHideHandler = () =>
    setState({ ...state, showAddCarModal: !state.showAddCarModal });

  const [cars, setCars] = useState<ICar[]>([]);
  useEffect(() => {
    setState({ ...state, loading: true });
    CarService.getAll().then((data) => {
      setCars(data);
      setState({ ...state, loading: false });
    });
  }, []);

  return (
    <>
      <Row className="p-1">
        <h1 className="pageTitle">Cars Catalog</h1>
        <Button
          variant="outline-dark"
          className="mb-3"
          onClick={addCarModalShowHideHandler}
        >
          Add a new car
        </Button>
      </Row>
      <Loader loading={state.loading}>
        <Row>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </Row>
      </Loader>
      <AddNewCarModal
        show={state.showAddCarModal}
        showHideHandler={addCarModalShowHideHandler}
        setCars={setCars}
      />
    </>
  );
};

