import { Link } from "react-router";
import './MostRented.css';
import { useMostRentedMotorcyclesLimit } from "../../api/motorcycleApi";

export default function MostRented() {
    const { motorcycles } = useMostRentedMotorcyclesLimit(3);
    
    return (
        <>
            {/* Start Most frequently rented moto section*/}
            <section className="rent-moto">
                <div className="container">
                    <h3 className="text-center text-3xl font-bold dark:text-white">A True Adventure</h3>
                    <br />
                    <h2 className="text-center text-4xl font-bold dark:text-white">Most Popular Motorcycles</h2>
                    <br />
                    {motorcycles.map(motorcycle =>
                        <Link key={motorcycle._id} to={`/rent-a-motorcycle/${motorcycle._id}`}>
                            <div className="frequently-box-3 float-container">
                                <img src={motorcycle.image? motorcycle.image : "/images/motorcycle_default.jpg"} alt={`${motorcycle.brand} ${motorcycle.model}`} />
                                <div className="moto-info">
                                    <h4 className="text-center">{`${motorcycle.brand} ${motorcycle.model}`}</h4>
                                    <br />
                                    <p>Type: {motorcycle.type}</p>
                                    <p>Engine: {motorcycle.engine}cc</p>
                                    <p>Power: {motorcycle.power}hp.</p>
                                    <p>Weight: {motorcycle.weight}kg.</p>
                                    <p>Category: {motorcycle.category}</p>
                                    <p>Rented: {motorcycle.reservationCount}</p>
                                </div>
                                <input type="submit" name="submit" value="More Details" />
                            </div>
                        </Link>

                    )}
                    <div className="clearfix" />
                    <div className="text-center">
                        <br />
                        <Link to="/rent-a-motorcycle" className="btn btn-secondary" name="more_moto">
                            View more
                        </Link>
                    </div>
                    <div className="clearfix" />
                </div>
            </section>
            {/* End Most frequently rented moto section*/}
        </>
    );
}