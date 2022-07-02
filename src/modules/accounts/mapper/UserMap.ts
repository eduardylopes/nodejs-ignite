import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    name,
    email,
    id,
    avatar,
    driver_license,
  }: User): IUserResponseDTO {
    return {
      name,
      email,
      id,
      avatar,
      driver_license,
    };
  }
}

export { UserMap };
