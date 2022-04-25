import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSpecificationsUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(
    @inject("SpecificationsRepository")
    specificationsRepository: SpecificationsRepository
  ) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute() {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
