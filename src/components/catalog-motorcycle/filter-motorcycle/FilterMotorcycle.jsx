export default function FilterMotorcycle() {
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
                        <div className="filter-box">All</div>
                        <div className="filter-box">Honda</div>
                        <div className="filter-box">Yamaha</div>
                        <div className="filter-box">Suzuki</div>
                        <div className="filter-box">BMW</div>
                    </div>
                </div>
            </section>
            <div className="clearfix" />
            <hr className="filter-hr" />
            {/* End Filter section*/}
        </>
    )
}