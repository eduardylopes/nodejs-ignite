import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,

    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,

    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    const minimumHour = 24;
    const isCarUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (isCarUnavailable) {
      throw new AppError("Car is not available");
    }

    const isRentAvailable = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (isRentAvailable) {
      throw new AppError("There's a rental in progress for this user!");
    }

    const compare = this.dateProvider.compareInHours(expected_return_date);

    if (compare < minimumHour) {
      throw new AppError("The rent must be greater than 24 hours");
    }

    const rental = this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    await this.carsRepository.updateAvailable(car_id, false);

    return rental;
  }
}

export { CreateRentalUseCase };
