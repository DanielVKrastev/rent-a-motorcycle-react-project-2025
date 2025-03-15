import { Link } from "react-router";
import './CatalogMotorcycle.css';

export default function CatalogMotorcycle() {
    return (
        <>
            {/* Start Filter section*/}
            <section className="filter">
                <div className="container">
                    <h3 className="text-center text-4xl font-bold mb-2">Start the adventure here</h3>
                    <h2 className="text-center text-5xl font-bold">Motorcycle rental</h2>
                    <br />
                    <br />
                    <div className="filter-buttons">
                        <div className="filter-box">All</div>
                        <div className="filter-box">Honda</div>
                        <div className="filter-box">Yamaha</div>
                        <div className="filter-box">Suzuki</div>
                        <div className="filter-box">BMW</div>
                    </div>
                </div>
            </section>
            <div className="clearfix" />
            <hr className="filter-hr" />
            {/* End Filter section*/}

            {/* Start Most rented moto section*/}
            <section className="rent-moto">
                <div className="container">
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
                            <input type="submit" name="submit" value="More Details" />
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
                            <input type="submit" name="submit" value="More Details" />
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
                            <input type="submit" name="submit" value="More Details" />
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
                            <input type="submit" name="submit" value="More Details" />
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
                            <input type="submit" name="submit" value="More Details" />
                        </div>
                    </Link>
                    <Link to="/rent-a-motorcycle/motorcycle">
                        <div className="frequently-box-3 float-container">
                            <img src="images/honda_cbr.png" alt="honda_cbr" />
                            <div className="moto-info">
                                <h4 className="text-center">HONDA CBR 600RR</h4>
                                <br />
                                <p>Тип: спортен</p>
                                <p>Двигател: 600cc</p>
                                <p>Мощност: 105hp.</p>
                                <p>Тегло: 190кг.</p>
                                <p>Категория: А</p>
                            </div>
                            <input type="submit" name="submit" defaultValue="Повече детайли" />
                        </div>
                    </Link>
                    <div className="clearfix" />
                    <div className="text-center">
                        <br />
                        <Link to="" className="btn btn-secondary" name="more_moto">
                            View more
                        </Link>
                    </div>
                    <div className="clearfix" />
                </div>
            </section>
            {/* End rented moto section*/}
        </>

    );
}