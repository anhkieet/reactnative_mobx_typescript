import { classToClass } from "class-transformer";

type Status = "ACTIVE";
type PulseLevel = "FIRESTORM";

export class UserModel {
  constructor(
    public id: number = 0,
    public name: string = "",
    public firstName: string = "",
    public lastName: string = "",
    public status: Status = "ACTIVE",
    public city: string = "",
    public username: string = "",
    public picture: string = "",
    public pulsePoints: number = 0,
    public pulseLevel: PulseLevel = "FIRESTORM"
  ) {}

  clone(): UserModel {
    return classToClass(this);
  }
}
