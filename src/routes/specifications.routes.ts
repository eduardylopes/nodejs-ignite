import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  listSpecificationsController.handle(request, response);
});

export { specificationRoutes };
