export default function DriverDetails() {
    return (
        <>
            <div className="reservation-data-left" id="reservation-data-left">
                {/* Start section for reservation for data driver */}
                <section className="reservation-driver-section">
                    <h1 className="text-3xl font-bold">Reservation details</h1>
                    <br />
                    <h2 className="text-2xl font-bold">Driver details</h2>
                    <h3 className="text-2xl font-bold">This information will be used for rental confirmation.</h3>
                    <div className="input-reservation-box">
                        <label htmlFor="first-name">Name *</label>
                        <br />
                        <input type="text" name="first-name" placeholder="Ivan" required="" />
                    </div>
                    <div className="input-reservation-box">
                        <label htmlFor="last-name">Last name *</label>
                        <br />
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Ivanov"
                            required=""
                        />
                    </div>
                    <div className="input-reservation-box">
                        <label htmlFor="client_telephone">Telephone *</label>
                        <br />
                        <input
                            type="number"
                            name="client_telephone"
                            defaultValue={+359}
                            required=""
                        />
                    </div>
                    <div className="input-reservation-box">
                        <label htmlFor="email">E-mail *</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="email@email.com"
                            required=""
                        />
                    </div>
                    <div className="input-reservation-box">
                        <label htmlFor="license_category">Category *</label>
                        <br />
                        <select name="license_category" required="">
                            <option value="A">A</option>
                            <option value="A2">A2</option>
                            <option value="A1">A1</option>
                            <option value="AM">AM</option>
                        </select>
                    </div>
                    <div className="input-reservation-box" required="">
                        <label htmlFor="birthday">Date of birth *</label>
                        <br />
                        <input type="date" name="birthday" />
                    </div>
                    <div className="clearfix" />
                </section>
                {/* End section for reservation for data driver */}
                <hr />
                {/* Start section for Terms & Conditions */}
                <section className="terms-section">
                    <h2 className="text-2xl font-bold">Terms and conditions</h2>
                    <h3 className="text-2xl font-bold">Accept the terms to continue</h3>
                    <div className="terms-box">
                        <div className="terms-checkbox text-center">
                            <input
                                type="checkbox"
                                name="terms"
                                defaultValue="Accept"
                                required=""
                            />
                        </div>
                        <div className="terms-text">
                            I accept Moto Krastev's privacy policy, terms of use and booking conditions.
                        </div>
                    </div>
                    <div className="terms-box">
                        <div className="terms-checkbox text-center">
                            <input type="checkbox" name="subscribe-submit" defaultValue="Yes" />
                        </div>
                        <div className="terms-text">
                            Subscribe to our newsletter and we will inform you about our new services.
                        </div>
                    </div>
                </section>
                {/* End section for Terms & Conditions */}
            </div>
        </>
    );
}