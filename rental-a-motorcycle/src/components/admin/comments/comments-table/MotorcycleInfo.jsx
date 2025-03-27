import { useMotorcycle } from "../../../../api/motorcycleApi";
import LoadingSpinner from "../../../loading-spinner/LoadingSpinner";

export default function MotorcycleInfo( {motorcycleId} ) {
    const { motorcycle, loading } = useMotorcycle(motorcycleId);

    if (loading) return <LoadingSpinner />;

    return <span>{motorcycle?.brand} {motorcycle?.model}</span>;
};