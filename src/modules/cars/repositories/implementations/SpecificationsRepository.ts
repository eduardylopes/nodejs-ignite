/* eslint-disable no-use-before-define */
import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTACE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstace(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTACE) {
      SpecificationsRepository.INSTACE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTACE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
