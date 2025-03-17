import ScrollEffectMotoInfo from "./scrollEffectMotoInfo";
import './RentMotoDescriptions.css';

export default function RentMotoDescription() {
  ScrollEffectMotoInfo();
  return (
    <>
      {/* Start Rent a motorcycle section*/}
      <section className="rent-moto">
        <div className="container">
          <h2 className="text-4xl font-bold dark:text-white">Why choose our motorbike rentals?</h2>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/ios-filled/50/820009/motorcycle.png"
              alt="motorcycle"
            />
            <h4 className="text-center">Wide selection of motorcycles</h4>
          </div>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/ios/50/820009/odometer.png"
              alt="odometer"
            />
            <h4 className="text-center">
              Flexible <br /> rental durations
            </h4>
          </div>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/ios/50/820009/gasoline-refill.png"
              alt="gasoline-refill"
            />
            <h4 className="text-center">
              Full <br /> tank <br />included
            </h4>
          </div>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/ios/50/820009/calendar--v1.png"
              alt="calendar--v1"
            />
            <h4 className="text-center">
              No mileage <br />
              restrictions
            </h4>
          </div>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/glyph-neue/64/820009/motorbike-helmet.png"
              alt="motorbike-helmet"
            />
            <h4 className="text-center">
              Equipment included <br />in the price
            </h4>
          </div>
          <div className="rent-box-3 float-container">
            <img
              className="rent-moto-img"
              src="https://img.icons8.com/ios/50/820009/guarantee--v1.png"
              alt="guarantee--v1"
            />
            <h4 className="text-center">
              Quality
              <br />and<br />
              reliability
            </h4>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <section className="rent-moto-desc">
        <ul className="box">
          <li>
            <h4 className="text-center">Variety of Motorcycles:</h4>
            <br />
            <p>
              We offer an extensive selection of motorcycles for rent. Whether you're after a high-performance sports bike, a comfortable touring motorcycle, or an adrenaline-pumping off-road machine, we have the perfect ride to match your style and adventure needs.
            </p>
          </li>
        </ul>
        <ul className="box">
          <li>
            <h4 className="text-center">Rental Period:</h4>
            <br />
            <p>
              We provide flexible terms for motorcycle rentals. You can choose a rental period that suits your plans - from daily to weekly or even monthly rental. We strive to be adaptable to your needs and to ensure the convenience and satisfaction of our customers.
            </p>
          </li>
        </ul>
        <ul className="box">
          <li>
            <h4 className="text-center">No Limits:</h4>
            <br />
            <p>
              We know that true adventure means exploring new horizons, and with our unlimited mileage policy, the road is yours to conquer. Ride as far as you like, discover new places, and enjoy every moment of your journey – no limits, no boundaries.
            </p>
          </li>
        </ul>
        <ul className="box">
          <li>
            <h4 className="text-center">Equipment:</h4>
            <br />
            <p>
              Everything you need for a safe and enjoyable ride is included in the price. From protective gear to comfort essentials, we provide top-quality equipment so you can hit the road without hassle and focus on enjoying every moment of your adventure.
            </p>
          </li>
        </ul>
      </section>
      <div className="clearfix" />
      {/* End Rent a motorcycle section*/}
    </>
  );
}