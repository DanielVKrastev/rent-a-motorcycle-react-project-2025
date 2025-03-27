import { useMotorcycle } from "../../../api/motorcycleApi";

export function MotorcycleModelBrand( {motorcycleId} ) {
    const { motorcycle, loading } = useMotorcycle(motorcycleId);

    if (loading) return <span>Loading...</span>;

    return <span>{motorcycle?.brand} {motorcycle?.model}</span>;
};

export function MotorcycleImage( {motorcycleId} ) {
    const { motorcycle, loading } = useMotorcycle(motorcycleId);

    if (loading) return <span>Loading...</span>;

    return <img 
                src={motorcycle.image ? motorcycle.image : "/images/motorcycle_default.jpg"} 
                alt={`${motorcycle.brand} ${motorcycle.model}`} 
            />
};