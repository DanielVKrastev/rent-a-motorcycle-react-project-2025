import { Link } from "react-router";
import './CatalogMotorcycle.css';
import FilterMotorcycle from "./filter-motorcycle/FilterMotorcycle";

export default function CatalogMotorcycle() {
    return (
        <>
            <FilterMotorcycle />

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