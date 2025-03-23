import { useMotorcycle } from "../../../../api/motorcycleApi";

export default function MotorcycleInfo( {motorcycleId} ) {
    const { motorcycle, loading } = useMotorcycle(motorcycleId);

    if (loading) return <span>Loading...</span>;

    return <span>{motorcycle?.brand} {motorcycle?.model}</span>;
};