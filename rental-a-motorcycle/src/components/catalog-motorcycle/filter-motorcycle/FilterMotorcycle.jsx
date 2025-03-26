import { useNavigate } from "react-router";

export default function FilterMotorcycle() {
    const navigate = useNavigate();

    function handlerFilterMotorcycle(filter) {

        if (filter === undefined) {
           return navigate('/rent-a-motorcycle');
        } 

        navigate(`/rent-a-motorcycle?brand=${filter}`)
    }
    return (
        <>
            {/* Start Filter section*/}
            <section className="filter">
                <div className="container">
                    <h3 className="text-center text-4xl font-bold mb-2">Start the adventure here</h3>
                    <h2 className="text-center text-5xl font-bold">Motorcycle rental</h2>
                    <br />
                    <br />
                    <div className="filter-buttons">
                        <div onClick={() => handlerFilterMotorcycle(undefined)} className="filter-box">All</div>
                        <div onClick={() => handlerFilterMotorcycle('Honda')} className="filter-box">Honda</div>
                        <div onClick={() => handlerFilterMotorcycle('Yamaha')} className="filter-box">Yamaha</div>
                        <div onClick={() => handlerFilterMotorcycle('Suzuki')} className="filter-box">Suzuki</div>
                        <div onClick={() => handlerFilterMotorcycle('BMW')} className="filter-box">BMW</div>
                    </div>
                </div>
            </section>
            <div className="clearfix" />
            <hr className="filter-hr" />
            {/* End Filter section*/}
        </>
    )
}