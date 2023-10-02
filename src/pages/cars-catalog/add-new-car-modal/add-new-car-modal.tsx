import { Form } from "react-bootstrap";
import { FieldValues, useForm } from "react-hook-form";

import { ICar } from "../../../types/icar";
import { Popup } from "../../../components/common/popup/popup";
import { CarService } from "../../../services/car.service";
import { InputError } from "../../../components/common/input-error/input-error";

type Props = {
  show: boolean;
  showHideHandler: () => void;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
};

export const AddNewCarModal = ({ show, showHideHandler, setCars }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const addCar = (data: FieldValues) => {
    // TODO: finish validation
    const car = { id: new Date().getTime(), ...data } as ICar;
    CarService.addCar(car)
      .then(() => setCars((prev) => [car, ...prev]))
      .then(() => showHideHandler())
      .then(() => reset())
      .catch((err) => console.error(err));
  };

  return (
    <Popup
      show={show}
      title="Add a New Car"
      showHideHandler={showHideHandler}
      confirmButton={{
        title: "Save",
        onClick: handleSubmit(addCar),
      }}
    >
      <Form>
        <Form.Control
          type="text"
          placeholder="Manufacturer"
          {...register("manufacturer", { required: "Required Field" })}
        />
        <InputError message={errors?.manufacturer?.message as string} />
        <Form.Control
          type="text"
          placeholder="Model"
          {...register("model", { required: "Required Field" })}
        />
        <InputError message={errors?.model?.message as string} />
        <Form.Control
          type="number"
          placeholder="Price"
          {...register("price", { required: "Required Field" })}
        />
        <InputError message={errors?.price?.message as string} />
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Description"
          {...register("description", { required: "Required Field" })}
        />
        <InputError message={errors?.description?.message as string} />

        <Form.Control
          type="text"
          placeholder="Image URL"
          {...register("imageUrl", {
            required: "Required Field",
            pattern: {
              value: /^http:\/\/|^https:\/\//,
              message: "Valid URL should be provided",
            },
          })}
        />
        <InputError message={errors?.imageUrl?.message as string} />

        <Form.Control
          type="number"
          placeholder="Year"
          {...register("year", {
            required: "Required Field",
            min: {
              value: 1900,
              message: "Year should be greater than 1900",
            },
            max: {
              value: new Date().getFullYear(),
              message: `Year should be less than ${new Date().getFullYear()}`,
            },
            maxLength: { value: 4, message: "Specify a year (4 digit)" },
          })}
        />
        <InputError message={errors?.price?.message as string} />
      </Form>
    </Popup>
  );
};

