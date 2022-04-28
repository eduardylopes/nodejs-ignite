import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    await carsRepositoryInMemory.create({
      name: "car1",
      description: "car_description",
      daily_rate: 180.0,
      license_plate: "EIE-1212",
      fine_amount: 200,
      brand: "car_brand",
      category_id: "category_id",
    });

    await listCarsUseCase.execute({});
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car3",
      description: "car_description",
      daily_rate: 180.0,
      license_plate: "EIE-1213",
      fine_amount: 200,
      brand: "car_brand_test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car4",
      description: "car_description",
      daily_rate: 180.0,
      license_plate: "EIE-1213",
      fine_amount: 200,
      brand: "car_brand_test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "car4",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car5",
      description: "car_description",
      daily_rate: 180.0,
      license_plate: "EIE-1213",
      fine_amount: 200,
      brand: "car_brand_test",
      category_id: "12345",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
