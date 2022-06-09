import Table from "../components/Table";
import "../style/home.scss"

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="home-container__heading">Listings Page</h1>
            <Table headings={["Title", "City", "End", "More-Info"]}/>
        </div>
    )
}

export default Home;