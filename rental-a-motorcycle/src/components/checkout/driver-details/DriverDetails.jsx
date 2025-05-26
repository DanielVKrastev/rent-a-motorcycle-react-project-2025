import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { useUser } from "../../../api/userApi";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";

export default function DriverDetails({
    userId
}) {
    const [phoneValue, setPhoneValue] = useState('+359');
    const [categoryValue, setCategoryValue] = useState('A');
    const [dateValue, setDateValue] = useState('2000-12-31T00:00:00.000Z');
    const { user } = useUser(userId);

    useEffect(() => {
        const rawPhone = user.telephone?.replace(/\s+/g, '') || '+359';
        setPhoneValue(rawPhone);
        setCategoryValue(user.licenseCategory);
        setDateValue(user.birthday);
    }, [user])

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
                        <label htmlFor="telephone">Telephone *</label>
                        <br />
                        <PhoneInput
                            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                            name="telephone"
                            value={phoneValue}
                             onChange={(value) => {
                                const cleaned = value?.replace(/[^\d+]/g, '') || '';
                                setPhoneValue(cleaned);
                            }}
                            placeholder="+359..."
                            required
                        />
                    </div>
                    <div className="input-reservation-box">
                        <label htmlFor="licenseCategory">Category *</label>
                        <br />
                        <select
                            name="licenseCategory"
                            value={categoryValue}
                            onChange={(e) => setCategoryValue(e.target.value)}
                            required
                        >
                            <option value="A">A</option>
                            <option value="A2">A2</option>
                            <option value="A1">A1</option>
                            <option value="AM">AM</option>
                        </select>
                    </div>
                    <div className="input-reservation-box" required>
                        <label htmlFor="birthday">Date of birth *</label>
                        <br />
                        <DatePicker
                            selected={dateValue}
                            onChange={setDateValue}
                            dateFormat="dd/MM/yyyy"
                            maxDate={subYears(new Date(), 18)} 
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            placeholderText="Select your birth date"
                        />
                <input type="hidden" name="birthday" value={dateValue} />
                    </div>


                    <div className="clearfix" />
                    <br />
                    <div className="terms-box">
                        <div className="terms-checkbox text-center">
                            <input
                                type="checkbox"
                                name="rememberDetails"
                            />
                        </div>
                        <div className="terms-text">
                            Remember details for your next reservation.
                        </div>
                    </div>

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
                                name="terms"
                                type="checkbox"
                                required
                            />
                        </div>
                        <div className="terms-text">
                            I accept Moto Krastev's privacy policy, <a
                                className="font-medium text-primary-600 hover:underline text-blue-500"
                                target="_blank"
                                href="/about"
                            >
                                terms of use and booking conditions.
                            </a>

                        </div>
                    </div>
                    <div className="terms-box">
                        <div className="terms-checkbox text-center">
                            <input type="checkbox" name="subscribeSubmit" defaultValue="Yes" />
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