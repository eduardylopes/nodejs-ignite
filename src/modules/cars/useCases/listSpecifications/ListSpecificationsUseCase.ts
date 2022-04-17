import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUseCase {
  private specificationsRepository: SpecificationsRepository;

  constructor(specificationsRepository: SpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute() {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
