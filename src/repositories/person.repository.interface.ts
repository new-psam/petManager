import { IPerson } from "@/entities/Models/person.interface";

export interface IPersonRepository {
    create(person: IPerson): Promise<IPerson | undefined>
}