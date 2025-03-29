import { Link, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

import './CatalogMotorcycle.css';

import { useActiveMotorcycles } from "../../api/motorcycleApi";

import FilterMotorcycle from "./filter-motorcycle/FilterMotorcycle";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import Pagination from "../partials/pagination/Pagination";

export default function CatalogMotorcycle() {
    const [searchParams] = useSearchParams();
    const filterMotorcycle = (searchParams.get("brand"));

    const[showMotorcycle, setShowMotorcycles] = useState([]);
    
    const { motorcycles, isLoading } = useActiveMotorcycles(filterMotorcycle);
    
    useEffect(() => {
        if (!isLoading && motorcycles.length >= 0) {
            setShowMotorcycles(motorcycles);
            setCurrentPage(1);
        }
    }, [motorcycles, isLoading, filterMotorcycle])

    const [currentPage, setCurrentPage] = useState(1);
    const motorcyclePerPage = 3;

    const totalPages = Math.ceil(showMotorcycle.length / motorcyclePerPage);
    const startIndex = (currentPage - 1) * motorcyclePerPage;
    const currentMotorcycles = showMotorcycle.slice(startIndex, startIndex + motorcyclePerPage);    
    
    const handlePagination = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <FilterMotorcycle />
            

            <section className="rent-moto">
            {isLoading && <LoadingSpinner />}
                <div className="container">
                    {currentMotorcycles.map(motorcycle =>
                        <Link key={motorcycle._id} to={`/rent-a-motorcycle/${motorcycle._id}`}>
                            <div className="frequently-box-3 float-container">
                                <img src={motorcycle.image? motorcycle.image : "/images/motorcycle_default.jpg"} alt={`${motorcycle.brand} ${motorcycle.model}`} />
                                <div className="moto-info">
                                    <h4 className="text-center">{`${motorcycle.brand} ${motorcycle.model}`}</h4>
                                    <br />
                                    <p>Type: {motorcycle.type}</p>
                                    <p>Engine: {motorcycle.engine}cc</p>
                                    <p>Power: {motorcycle.power}hp.</p>
                                    <p>Weight: {motorcycle.weight}kg.</p>
                                    <p>Category: {motorcycle.category}</p>
                                    <p>Rented: {motorcycle.reservationCount}</p>
                                </div>
                                <input type="submit" name="submit" value="More Details" />
                            </div>
                        </Link>
                    )}

                    {(!currentMotorcycles || currentMotorcycles.length === 0) && 
                        <div className="flex justify-center items-center p-6 bg-white shadow-md rounded-lg">
                            <div className="text-center">
                                <i className="fas fa-frown text-4xl text-red-500 mb-4">There are no motorcycles available for this selection.</i>
                                <p className="text-lg text-gray-700"></p>
                            </div>
                        </div>
                    }

                    <div className="clearfix" />
                    <div className="text-center">
                        <br />
                    {currentMotorcycles.length > 0 && (
                        <>
                            <Pagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                handlePagination={handlePagination}
                            />
                        </>
                        )}
                    </div>
                    <div className="clearfix" />
                </div>
            </section>

        </>

    );
}