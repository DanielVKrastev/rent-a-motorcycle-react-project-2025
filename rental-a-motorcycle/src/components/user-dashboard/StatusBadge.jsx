import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

export default function StatusBadge ({
    status
}) {
    switch (status) {
        case "Completed":
            return <span className="text-green-600 flex items-center"><FaCheckCircle className="mr-1 ml-1" /> Completed</span>;
        case "In progress":
            return <span className="text-green-400 flex items-center"><FaClock className="mr-1 ml-1" /> In progress</span>;
        case "Confirmed":
            return <span className="text-yellow-500 flex items-center"><FaClock className="mr-1 ml-1" /> Confirmed</span>
        case "Pending":
            return <span className="text-yellow-400 flex items-center"><FaClock className="mr-1 ml-1" /> Pending</span>;
        case "Canceled":
            return <span className="text-red-600 flex items-center"><FaTimesCircle className="mr-1 ml-1" /> Canceled</span>;
        case "Rejected":
            return <span className="text-red-600 flex items-center"><FaTimesCircle className="mr-1 ml-1" /> Rejected</span>;
        default:
            return <span className="text-gray-600">Unknown</span>;
    }
};