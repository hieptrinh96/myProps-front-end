import ListingCard from "../../components/ListingCard/ListingCard";
import "./Listings.css"
import { Link } from "react-router-dom";


const Listings = ({ listings }) => {
  return (
    <main className="listing-container">
      <div>
        <h1>Listings</h1>

        <div className="class-div">{listings.map((l) => (
          <>
          <ListingCard listing={l} key={l._id} />
          <Link to="/tenants" state={l}></Link>
          </>
        ))}
        </div>
      </div>
    </main>
  );
}


export default Listings;