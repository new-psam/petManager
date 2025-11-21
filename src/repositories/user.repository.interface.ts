import { IPerson } from "@/entities/Models/person.interface";
import { IUser } from "@/entities/Models/user.interface";

export interface IUserRepository {
    findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined>;

    create(user: IUser): Promise<IUser | undefined>;
}