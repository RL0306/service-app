import { Listing } from "@prisma/client"
import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateListingDTO {

  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  street: string

  @IsNotEmpty()
  @IsString()
  city: string

  @IsNotEmpty()
  @IsString()
  state: string

  @IsNotEmpty()
  @IsString()
  country: string

  @IsNumber()
  doorNumber?: number

  @IsString()
  @IsNotEmpty()
  postCode: string

  @IsNumber()
  @IsNotEmpty()
  amount: number

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  end: Date

}

export class CustomListingDTO {

  id: number
  title: string
  description: string
  amount: number
  end: Date

  populateListing(listing: Listing) {
    const listingDTO = new CustomListingDTO();
    listingDTO.id = listing.id;
    listingDTO.title = listing.title;
    listingDTO.description = listing.description;
    listingDTO.amount = listing.amount;
    listingDTO.end = listing.end;

    return listingDTO;
  }
}