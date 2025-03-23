import { useReservations, useReservationsLimit, useRevenue } from "../../../api/reservationApi";
import { useUsers } from "../../../api/userApi";
import MotorcycleInfo from "../reservations/reservations-table/MotorcycleInfo";

export default function Dashboard() {
  const { users } = useUsers();
  const numberOfUsers = users?.length;

  const { reservations } = useReservations();
  const numberOfReservations = reservations?.length;

  const { revenue } = useRevenue();

  const { reservations: reservationsLimit } = useReservationsLimit(5);

  return (
    <div className="flex-1">
      <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Total Users</h3>
          <p className="text-4xl">{numberOfUsers}</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Revenue</h3>
          <p className="text-4xl">{revenue} lv.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Reservations</h3>
          <p className="text-4xl">{numberOfReservations}</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Motorcycle</th>
              <th className="px-4 py-2 text-left">Date Order</th>
            </tr>
          </thead>
          <tbody>
            {reservationsLimit.map(reservation => (
              <tr key={reservation._id}>
                <td className="px-4 py-2">{reservation.username}</td>
                <td className="px-4 py-2">{reservation.telephone}</td>
                <td className="px-4 py-2">{reservation.email}</td>
                <td className="px-4 py-2"><MotorcycleInfo motorcycleId={reservation.motorcycleId} /></td>
                <td className="px-4 py-2">{new Date(reservation.dateOrder).toLocaleDateString("en-GB", { timeZone: "UTC" })}</td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>

  );
}
