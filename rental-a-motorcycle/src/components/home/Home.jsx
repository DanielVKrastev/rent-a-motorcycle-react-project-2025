import { useEffect } from "react";
import MostRented from "../most-rented/MostRented";
import Header from "./header/Header";
import RentMotoDescription from "./rent-moto-description/RentMotoDescrtiption";

export default function Home() {

    useEffect(() => {

            fetch('http://localhost:3000/users/67d85e0044e2a24a157c827d')
                        .then(response => (response.json())
                        .then(res => console.log(res)
                        )
                        );
        
    },[]);

    return (
        <>
            <Header />

            <RentMotoDescription />

            <MostRented />
        </>
    );
}