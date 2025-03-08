import './App.css';

function App() {
    return (
        <>
  {/*Start Header section*/}
  <section className="header-contact">
    <div className="header-email">
      <img
        width={20}
        height={20}
        src="https://img.icons8.com/ios-filled/50/545454/new-post.png"
        alt="new-post"
      />
      <p>info@motokrastev.bg</p>
    </div>
    <div className="header-phones">
      <img
        width={20}
        height={20}
        src="https://img.icons8.com/ios-filled/50/545454/apple-phone.png"
        alt="apple-phone"
      />
      <p>+359 89 327 6008 / +359 88 554 6666</p>
    </div>
    <div className="header-work-time">
      <img
        width={20}
        height={20}
        src="https://img.icons8.com/ios-filled/50/545454/present.png"
        alt="present"
      />
      <p>Пон - Съб - 10:0 - 18:00 / Неделя - почивен ден</p>
    </div>
    <div className="header-social">
      <img
        width={30}
        height={30}
        src="https://img.icons8.com/ios-glyphs/30/545454/facebook.png"
        alt="facebook"
      />
      <img
        width={30}
        height={30}
        src="https://img.icons8.com/ios-glyphs/30/545454/instagram-new.png"
        alt="instagram-new"
      />
      <img
        width={28}
        height={28}
        src="https://img.icons8.com/ios-filled/50/545454/twitterx.png"
        alt="twitterx"
      />
    </div>
  </section>
  {/*End Header section*/}
  <nav className="sticky top-0 bg-white dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600 transition-all duration-300">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a
        href="https://flowbite.com/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="./images/logo-white.png"
          className="h-12"
          alt="Flowbite Logo"
        />
      </a>
      <div className="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white bg-red-400 rounded-sm md:bg-transparent md:text-red-400 md:p-0 md:dark:text-red-400"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 md:dark:hover:text-red-400 dark:text-white dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="bg-center bg-no-repeat bg-[url('./images/bg-road.jpg')] bg-gray-500 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        We invest in the world’s potential
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        >
          Get started
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div>
    </div>
  </section>
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
  <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="./images/logo-white.png"
              className="h-13 me-3"
              alt="MotoKrastev Logo"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
            </svg>
            <span className="sr-only">Discord community</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

    )
}

export default App
