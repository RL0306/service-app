import { useEffect, useState } from "react";
import Table from "../components/Table";
import { IListingItem } from "../interface/IListing";
import { getListings } from "../service/ListingService";
import "../style/home.scss"

const Home = () => {


    const[listings, setListings] = useState<IListingItem[]>([]);

    useEffect(() => {
        // getListings().then(data => setListings(data));
        getListings().then(data => {
            setListings(data);
        });
    },[])

    return(
        <div className="home-container">
            <h1 className="home-container__heading">Listings Page</h1>
            <Table headings={["Title", "City", "End", "More-Info"]} data={listings}/>
        </div>
    )
}

export default Home;