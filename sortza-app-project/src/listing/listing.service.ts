import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { GetUser } from "src/auth/get-user.decorator";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateListingDTO } from "./dto/listingDTO";
import { CustomListingDTO } from "./dto/listingDTO";

@Injectable()
export class ListingService {
  constructor(private prismaService: PrismaService, private listingDTO: CustomListingDTO) { }

  async create(@GetUser() user: User, createListingDTO: CreateListingDTO) {

    try {
      await this.prismaService.listing.create({
        data: {
          title: createListingDTO.title,
          description: createListingDTO.description,
          street: createListingDTO.street,
          city: createListingDTO.city,
          state: createListingDTO.street,
          country: createListingDTO.country,
          doorNumber: createListingDTO.doorNumber,
          postCode: createListingDTO.postCode,
          amount: createListingDTO.amount,
          end: createListingDTO.end,
          userId: user.id
        }
      })

      return { msg: "successfully created!" }

    } catch (error) {
      console.log(error);
    }
  }


  async getAll(@GetUser() user: User) {
    /*
      using custom dto object because it's cleaner approach instead of destructing and 
      doing
    */
    try {
      return (await this.prismaService.listing.findMany())
        .filter(listing => listing.userId !== user.id)
        .map(listing => this.listingDTO.populateListing(listing));

    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id: number) {
    try {
      const listing = await this.prismaService.listing.findUnique({
        where: {
          id
        }
      })

      if (!listing) {
        throw new NotFoundException("Unable to find listing");
      }
      return this.listingDTO.populateListing(listing);

    } catch (error) {
      throw error;
    }
  }

  async getAllForCurrentUser(user: User) {
    try {
      return (await this.prismaService.listing.findMany({
        where: {
          userId: user.id
        }
      })).map((listing) => this.listingDTO.populateListing(listing))
    } catch (error) {
      throw error;
    }
  }
}