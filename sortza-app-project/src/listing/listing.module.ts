import { Module } from '@nestjs/common';
import { CustomListingDTO } from './dto/listingDTO';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';

@Module({
  controllers: [ListingController],
  providers: [ListingService, CustomListingDTO]
})
export class ListingModule { }
