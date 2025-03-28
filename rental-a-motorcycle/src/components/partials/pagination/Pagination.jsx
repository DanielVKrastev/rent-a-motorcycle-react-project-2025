export default function Pagination({
    currentPage,
    totalPages,
    handlePagination
}) {

    return (
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
    );
}