import { IAddress } from "@/entities/Models/address.interface";
import { IPerson } from "@/entities/Models/person.interface";


export interface IAddressRepository {
    findAddressByPersonId(
        personId: number, 
        page: number, 
        limit: number
    ): Promise<(IAddress & IPerson)[]>;

    create(address: IAddress): Promise<IAddress | undefined>;
}