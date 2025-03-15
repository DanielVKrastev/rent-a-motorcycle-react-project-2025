import MostRented from "../most-rented/MostRented";
import Header from "./header/Header";
import RentMotoDescription from "./rent-moto-description/RentMotoDescrtiption";


export default function Home() {
    return (
        <>
            <Header />

            <RentMotoDescription />

            <MostRented />

        </>
    );
}