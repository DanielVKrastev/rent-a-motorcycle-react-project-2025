import { Link, useSearchParams } from "react-router";
import './CatalogMotorcycle.css';
import FilterMotorcycle from "./filter-motorcycle/FilterMotorcycle";
import { useMotorcycles } from "../../api/motorcycleApi";
import { useState } from "react";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

export default function CatalogMotorcycle() {
    const [searchParams] = useSearchParams();
    const filterMotorcycle = (searchParams.get("brand"));
    
    const { motorcycles, isLoading } = useMotorcycles(filterMotorcycle);

    const [currentPage, setCurrentPage] = useState(1);
    const motorcyclePerPage = 3;

    const totalPages = Math.ceil(motorcycles.length / motorcyclePerPage);
    const startIndex = (currentPage - 1) * motorcyclePerPage;
    const currentMotorcycles = motorcycles.slice(startIndex, startIndex + motorcyclePerPage);

    
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
                            {/* Pagination */}
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={() => handlePagination(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 mx-1 bg-red-400 text-white rounded-md disabled:bg-gray-400"
                                >
                                    Previous
                                </button>
                                <span className="px-4 py-2 mx-1 text-lg">{currentPage}</span>
                                <button
                                    onClick={() => handlePagination(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 mx-1 bg-red-400 text-white rounded-md disabled:bg-gray-400"
                                >
                                    Next
                                </button>
                        </div>
                        </>
                        )}
                    </div>
                    <div className="clearfix" />
                </div>
            </section>

        </>

    );
}