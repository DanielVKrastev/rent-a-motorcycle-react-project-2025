import { Link } from "react-router";
import './MostRented.css';

export default function MostRented() {
    return (
        <>
            {/* Start Most frequently rented moto section*/}
            <section className="rent-moto">
                <div className="container">
                    <h3 className="text-center text-3xl font-bold dark:text-white">A True Adventure</h3>
                    <br />
                    <h2 className="text-center text-4xl font-bold dark:text-white">Most Popular Motorcycles</h2>
                    <br />
                    <Link to="/rent-a-motorcycle/motorcycle">
                        <div className="frequently-box-3 float-container">
                            <img src="/images/honda_cbr.png" alt="honda_cbr" />
                            <div className="moto-info">
                                <h4 className="text-center">HONDA CBR 600RR</h4>
                                <br />
                                <p>Type: Sport</p>
                                <p>Engine: 600cc</p>
                                <p>Power: 105hp.</p>
                                <p>Weight: 190кг.</p>
                                <p>Category: А</p>
                            </div>
                            <input type="submit" name="submit" defaultValue="More Details" />
                        </div>
                    </Link>
                    <Link to="/rent-a-motorcycle/motorcycle">
                        <div className="frequently-box-3 float-container">
                            <img src="/images/honda_cbr.png" alt="honda_cbr" />
                            <div className="moto-info">
                                <h4 className="text-center">HONDA CBR 600RR</h4>
                                <br />
                                <p>Type: Sport</p>
                                <p>Engine: 600cc</p>
                                <p>Power: 105hp.</p>
                                <p>Weight: 190кг.</p>
                                <p>Category: А</p>
                            </div>
                            <input type="submit" name="submit" defaultValue="More Details" />
                        </div>
                    </Link>
                    <Link to="/rent-a-motorcycle/motorcycle">
                        <div className="frequently-box-3 float-container">
                            <img src="/images/honda_cbr.png" alt="honda_cbr" />
                            <div className="moto-info">
                                <h4 className="text-center">HONDA CBR 600RR</h4>
                                <br />
                                <p>Type: Sport</p>
                                <p>Engine: 600cc</p>
                                <p>Power: 105hp.</p>
                                <p>Weight: 190кг.</p>
                                <p>Category: А</p>
                            </div>
                            <input type="submit" name="submit" defaultValue="More Details" />
                        </div>
                    </Link>
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