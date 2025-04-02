import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function useActiveNavButton() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');
    useEffect(() => {
        const pathSegments = location.pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];
        
        if(pathSegments[pathSegments.length - 2] == 'reservation-details'){
            return setActiveTab('reservations');
        }

        setActiveTab(lastSegment);
        
    }, [location])

    return [
        activeTab
    ];
}