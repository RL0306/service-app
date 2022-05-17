import { Controller, Injectable, Post, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { AuthenticatedGuard } from "src/auth/authenticated.guard";
import { GetUser } from "src/auth/get-user.decorator";
import { ListingService } from "./listing.service";

@Controller("/api/v1/listing")
@Injectable()
@UseGuards(AuthenticatedGuard)
export class ListingController {
  constructor(private listingService: ListingService) { }

  @Post("/create")
  create(@GetUser() user: User) {
    return this.listingService.create(user);
  }
}