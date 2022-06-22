import { IListingItem } from "./IListing"


export interface ITable {
    headings : Array<string>
    data : IListingItem[] | null
}