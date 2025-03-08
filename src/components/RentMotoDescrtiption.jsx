import ScrollEffectMotoInfo from '../jsDesignHelpers/scrollEffectMotoInfo';

export default function RentMotoDescription() {
    ScrollEffectMotoInfo();
    return (
        <>
          {/* Start Rent a motorcycle section*/}
  <section className="rent-moto">
    <div className="container">
      <h2>Защо да си наемете мотоциклет от нас?</h2>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/ios-filled/50/820009/motorcycle.png"
          alt="motorcycle"
        />
        <h4 className="text-center">Разнообразие от мотоциклети</h4>
      </div>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/ios/50/820009/odometer.png"
          alt="odometer"
        />
        <h4 className="text-center">
          Период <br /> на <br />
          наем
        </h4>
      </div>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/ios/50/820009/gasoline-refill.png"
          alt="gasoline-refill"
        />
        <h4 className="text-center">
          Пълен <br /> резервоар <br />с гориво
        </h4>
      </div>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/ios/50/820009/calendar--v1.png"
          alt="calendar--v1"
        />
        <h4 className="text-center">
          Без ограничения <br /> на <br />
          пробега
        </h4>
      </div>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/glyph-neue/64/820009/motorbike-helmet.png"
          alt="motorbike-helmet"
        />
        <h4 className="text-center">
          Включена <br /> екипировка <br />в цената
        </h4>
      </div>
      <div className="rent-box-3 float-container">
        <img
          className="rent-moto-img"
          src="https://img.icons8.com/ios/50/820009/guarantee--v1.png"
          alt="guarantee--v1"
        />
        <h4 className="text-center">
          Качество
          <br />и<br />
          надеждност
        </h4>
      </div>
      <div className="clearfix" />
    </div>
  </section>
  <section className="rent-moto-desc">
    <ul className="box">
      <li>
        <h4 className="text-center">Разнообразие от мотоциклети:</h4>
        <br />
        <p>
          Предлагаме широка гама от мотоциклети, които можете да наемете.
          Независимо дали търсите спортен, пътнически или офроуд мотоциклет, ще
          намерите подходящия модел, отговарящ на вашите предпочитания и нужди.
        </p>
      </li>
    </ul>
    <ul className="box">
      <li>
        <h4 className="text-center">Период на наем:</h4>
        <br />
        <p>
          Ние осигуряваме гъвкави условия за наемане на мотоциклети. Можете да
          изберете период на наем, който отговаря на вашите планове - от дневен
          до седмичен или дори месечен наем. Стремим се да бъдем приспособими
          към вашите нужди и да осигурим удобство и удовлетворение на клиентите
          си.
        </p>
      </li>
    </ul>
    <ul className="box">
      <li>
        <h4 className="text-center">Без ограничения:</h4>
        <br />
        <p>
          Ние разбираме, че мотоциклетният туризъм включва изследване на нови
          места и дълги разстояния. С нашите условия без лимит на километрите
          вие сте свободни да пътувате толкова, колкото искате, и да се
          наслаждавате на пътешествието си без никакви ограничения.
        </p>
      </li>
    </ul>
    <ul className="box">
      <li>
        <h4 className="text-center">Екипировка:</h4>
        <br />
        <p>
          С включената екипировка в цената, вие получавате всичко необходимо, за
          да се чувствате комфортно и защитени по време на мото пътуването си.
          Това ви спестява време и усилия при подготовката и ви позволява да се
          фокусирате върху наслаждаването на пътуването.
        </p>
      </li>
    </ul>
  </section>
  <div className="clearfix" />
  {/* End Rent a motorcycle section*/}
        </>
    );
}