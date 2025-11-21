import { IAddress } from "@/entities/Models/address.interface";
import { IPerson } from "@/entities/Models/person.interface";
import { IAddressRepository } from "@/repositories/address.repository.interface";

export class FindAddressByPersonUseCase {
    constructor(private addressRepository: IAddressRepository) {};

    async handler(
        personId: number, 
        page: number, 
        limit: number
    ): Promise<(IAddress & IPerson)[]> {
        return this.addressRepository.findAddressByPersonId(personId, page, limit);
    }
}