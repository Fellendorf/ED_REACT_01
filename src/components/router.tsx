import { Routes, Route } from "react-router-dom";

import { mainPages, otherPages } from "../pages/pages-config";
import { CarsCatalog } from "../pages/cars-catalog/cars-catalog";
import { NotFound } from "../pages/not-found/not-found";
import { CarDetais } from "../pages/car-details/car-details";

export const Router = () => {
  return (
    <Routes>
      <Route path={mainPages.carsCatalog.path} element={<CarsCatalog />} />
      <Route
        path={`${otherPages.carDetails.path}/:id`}
        element={<CarDetais />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

