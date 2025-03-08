export default function MostRented() {
    return (
        <>
            {/* Start Most frequently rented moto section*/}
            <section className="rent-moto">
                <div className="container">
                <h3 className="text-center">Истинско приключение</h3>
                <br />
                <h2 className="text-center">Често наемани мотоциклети</h2>
                <br />
                <a href="#">
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
                </a>
                <a href="#">
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
                </a>
                <a href="#">
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
                </a>
                <div className="clearfix" />
                <div className="text-center">
                    <br />
                    <a href="" className="btn btn-secondary" name="more_moto">
                    Разгледай още
                    </a>
                </div>
                <div className="clearfix" />
                </div>
            </section>
            {/* End Most frequently rented moto section*/}
        </>
    );
}