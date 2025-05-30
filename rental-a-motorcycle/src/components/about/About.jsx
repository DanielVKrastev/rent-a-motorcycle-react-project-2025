import { useState } from 'react';

import './About.css';

import { useCreateReqeust } from '../../api/customerRequestApi';

import MessageToast from '../messageToast/MessageToast';
import MapComponent from './map/MapComponent';

export default function About() {
    const [showMessageToast, setMessageShowToast] = useState(false);

    const { createCustomerRequest } = useCreateReqeust();

    async function submitActionRequest(formData) {
        const { theme, message } = Object.fromEntries(formData);

        try {
            await createCustomerRequest({ theme, message });
            setMessageShowToast({ type: 'success', content: 'Send message request success!' });
        } catch (err) {
            setMessageShowToast({ type: 'error', content: err.message });
        }
    }

    return (
        <>
            {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}
            {/*Start About section*/}
            <section className="about">
                <div className="container">
                    <div className="about-text">
                        <h2 className="text-1xl font-bold">About us</h2>
                        <br />
                        <h3 className="text-2xl font-bold">Welcome to Moto Krastev</h3>
                        <p>
                            We are a group of passionate motorcyclists who created MotoKrastev with one simple goal – to offer you unforgettable and authentic motorcycle experiences. Whether you are exploring your local roads or venturing into far-off destinations, we believe that traveling on two wheels offers a unique perspective of the world.
                        </p>
                        <br />
                        <br />
                        <h3 className="text-2xl font-bold">Our mission </h3>
                        <p>
                            Our mission is to provide you with the freedom of the open road, the thrill of adventure, and the joy of discovering new places on the back of a motorcycle. With carefully selected bikes and personalized services, we ensure that every journey you embark on is as exciting and safe as possible. Join us and let’s make memories that will last a lifetime!
                        </p>
                        <br />
                        <h3 className="text-2xl font-bold">Contacts</h3>
                        <p>
                            Contact us to learn more about our offers and how
                            we can provide you with an unforgettable motorcycle adventure. We look forward
                            to welcoming you on the road!
                        </p>
                        <br />
                        <div>
                            <p>Address: Bulgaria, Varna, Blvd. Vladislav Varnenchik</p>
                            <p>Telephone: +359 88 888 8888 / +359 88 666 6666</p>
                            <p>E-mail: info@motokrastev.bg</p>
                        </div>

                    </div>
                    <div className="about-contact">
                        <form action={submitActionRequest}>
                            <h2 className="text-1xl font-bold">Write to us</h2>
                            <br />
                            <p>Theme</p>
                            <input
                                type="text"
                                name="theme"
                                placeholder="Theme"
                                className="about-input"
                            />
                            <p>Message</p>
                            <textarea name="message" cols={30} rows={10} defaultValue={""} />
                            <br />
                            <button
                                type="submit"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:border-gray-600 focus:ring-gray-700"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    <div className="about-faq">
                        
                        <div className="container z-10">
                            <h2 className="text-1xl font-bold">Our own office</h2><br />
                            <MapComponent />
                        </div>

                        <h2 className="text-1xl font-bold text-center">Terms and Conditions</h2>
                        <div className="container z-10" id="terms">
                            <p className="text-1xl font-bold"><i>By using our platform to rent a motorcycle, you agree to the following terms:</i></p>
                            <br />
                            <ol>
                                <li><h3 className="text-1xl font-bold">1. Age Requirement:</h3></li>
                                <li>You must be at least 18 years old and hold a valid motorcycle license.</li>
                            </ol>
                            <ol>
                                <li><h3 className="text-1xl font-bold">2. Responsibility:</h3></li>
                                <li>You are fully responsible for the motorcycle during the rental period, including any damages, theft, or legal violations.</li>
                            </ol>
                            <ol>
                                <li><h3 className="text-1xl font-bold">3. Usage Limits:</h3></li>
                                <li>Motorcycles must not be used for racing, off-roading, or any illegal activity.</li>
                            </ol>
                            <ol>
                                <li><h3 className="text-1xl font-bold">4. Insurance:</h3></li>
                                <li>Basic insurance is included. Additional coverage is available at checkout.</li>
                            </ol>
                            <ol>
                                <li><h3 className="text-1xl font-bold">5. Cancellations & Refunds:</h3></li>
                                <li>Free cancellations up to 7 days before the rental period. No refunds after that.</li>
                            </ol>
                            <ol>
                                <li><h3 className="text-1xl font-bold">6. Data Use:</h3></li>
                                <li> We store only the necessary data to process bookings. We do not share your personal information with third parties.</li>
                            </ol>
                            <br />
                            <p className="text-1xl font-bold">
                               <i>By continuing to use this platform, you accept these terms.</i> 
                            </p>
                        </div>


                        <h3 className="text-center text-1xl font-bold">FAQ</h3>
                        <details close="">
                            <summary className="faq-box">
                                What motorcycles do you offer for rent??
                            </summary>
                            <div className="faq-content">
                                We offer a variety of motorcycles – sports, touring, and off-road models, to meet the needs of every rider. You can check out the available models on our website and choose the one that best fits your preferences.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                What is the minimum age to rent a motorcycle??
                            </summary>
                            <div className="faq-content">
                                The minimum age to rent a motorcycle is 17 years old, with at least 12 months of driving experience. For more powerful models, the minimum age may be higher.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                What is included in the rental price?
                            </summary>
                            <div className="faq-content">
                                The rental price includes the motorcycle, full gear for the rider, and passenger gear (if needed). Additionally, we offer the option of motorcycle delivery to a specified area.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                What gear is included in the rental?
                            </summary>
                            <div className="faq-content">
                                The price includes a helmet, jacket, and gloves for the rider. If you need gear for a passenger, it is available at additional cost.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                What should I do if I want to cancel my reservation??
                            </summary>
                            <div className="faq-content">
                                You can cancel your reservation up to 7 days before the rental date and receive a full refund. For cancellations made closer to the rental date, different terms may apply.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                What documents are required to rent a motorcycle?
                            </summary>
                            <div className="faq-content">
                                To rent a motorcycle, you will need a valid driver’s license, an ID card, and a security deposit.
                            </div>
                        </details>
                        <details close="">
                            <summary className="faq-box">
                                Can I travel outside of Bulgaria with the rented motorcycle?
                            </summary>
                            <div className="faq-content">
                                No, taking the rented motorcycle into another country is not allowed.
                            </div>
                        </details>
                    </div>
                    <div className="clearfix" />
                </div>
            </section>
            {/*End About section*/}
        </>

    );
}