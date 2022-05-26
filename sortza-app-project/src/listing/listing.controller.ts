import { Body, Controller, Get, Injectable, Param, Post, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthenticatedGuard } from "src/auth/authenticated.guard";
import { GetUser } from "src/auth/get-user.decorator";
import { CreateListingDTO } from "./dto/listingDTO";
import { ListingService } from "./listing.service";

@Controller("/api/v1/listing")
@Injectable()
@UseGuards(AuthenticatedGuard)
export class ListingController {
  constructor(private listingService: ListingService) { }

  @Post()
  create(@GetUser() user: User, @Body() createListingDTO: CreateListingDTO) {
    return this.listingService.create(user, createListingDTO);
  }

  @Get("/all")
  all() {
    return this.listingService.getAll()
  }

  @Get(":id")
  getOne(@Param("id") id: number) {
    return this.listingService.getOne(id);
  }

  @Get("/all/current")
  allForCurrentUser(@GetUser() user: User) {
    return this.listingService.getAllForCurrentUser(user);
  }


}