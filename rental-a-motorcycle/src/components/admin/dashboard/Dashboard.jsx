import { useReservations, useRevenue } from "../../../api/reservationApi";
import { useUsers } from "../../../api/userApi";

export default function Dashboard() {
  const { users } = useUsers();
  const numberOfUsers = users?.length;

  const { reservations } = useReservations();
  const numberOfReservations = reservations?.length;

  const { revenue } = useRevenue();

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
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">Created a new post</td>
              <td className="px-4 py-2">2025-03-12</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">Updated profile</td>
              <td className="px-4 py-2">2025-03-11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}
