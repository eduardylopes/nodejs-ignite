import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  private listSpecificationsUseCase: ListSpecificationsUseCase;

  constructor(listSpecificationsUseCase: ListSpecificationsUseCase) {
    this.listSpecificationsUseCase = listSpecificationsUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listSpecificationsUseCase.execute();

    return response.json(all);
  }
}

export { ListSpecificationsController };
