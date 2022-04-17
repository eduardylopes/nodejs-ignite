import { inject, injectable } from "tsyringe";

import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

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
