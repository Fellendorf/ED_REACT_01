import { ICar } from "../types/icar";
import axios from "axios";

const BACKEND_API_URL = "http://localhost:3000";

export const CarService = {
  async getAll(): Promise<ICar[]> {
    const response = await axios.get(
      `${BACKEND_API_URL}/cars?_page=1&_limit=21&_sort=id&_order=desc`
    );
    return response.data;
  },

  async getCar(id: number): Promise<ICar> {
    const response = await axios.get(`${BACKEND_API_URL}/cars/${id}`);
    return response.data;
  },

  async addCar(car: ICar): Promise<void> {
    await axios.post(`${BACKEND_API_URL}/cars/`, car);
  },
};

