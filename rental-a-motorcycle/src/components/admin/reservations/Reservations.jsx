import ReservationTable from "./reservations-table/ReservationTable";

export default function Reservations() {
    return (
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-6">Reservations</h2>
        <ReservationTable />
      </div>

    );
  }
  