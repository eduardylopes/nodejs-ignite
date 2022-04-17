import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  private specificationsRepository: ISpecificationsRepository;

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
