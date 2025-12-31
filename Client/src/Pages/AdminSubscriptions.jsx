import { useEffect, useState } from "react";
import { Alert, Table, TableHead,
  TableHeadCell,
  TableBody,
  TableCell,
  TableRow, Spinner } from "flowbite-react";
import { useSelector } from "react-redux";

export default function AdminSubscriptions() {
  const { currentUser } = useSelector((state) => state.user);
  const [subscriptions, setSubscriptions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // UI-level admin protection
    if (!currentUser || currentUser.isAdmin !== "admin") {
      setError("Admin access only");
      setLoading(false);
      return;
    }

    const fetchSubscriptions = async () => {
      try {
        const res = await fetch(
          "https://subscription-management-dashboard-1.onrender.com/api/subscribe/admin/subscriptions",
          {
            credentials: "include",
          }
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to fetch subscriptions");
        } else {
          setSubscriptions(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [currentUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-24">
        <Spinner size="xl" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert color="failure" className="max-w-xl mx-auto mt-16">
        {error}
      </Alert>
    );
  }

  return (
    
    <div className="max-w-8xl mx-auto mt-12 px-2">
      {/* HEADER */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Admin Subscriptions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Overview of all user subscriptions
          </p>
        </div>

        <span className="mt-3 sm:mt-0 inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          Total: {subscriptions.length}
        </span>
      </div>

      {/* TABLE CARD */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
        {subscriptions.length === 0 ? (
          <p className="p-6 text-center text-gray-500 dark:text-gray-400">
            No subscriptions found
          </p>
        ) : (
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead className="bg-gray-50 dark:bg-gray-800">
                 <TableRow>
                <TableHeadCell>User</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Plan</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Start Date</TableHeadCell>
                <TableHeadCell>End Date</TableHeadCell>
                </TableRow>
              </TableHead>

              <TableBody className="divide-y">
                {subscriptions.map((sub) => (
                  <TableRow
                    key={sub._id}
                    className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <TableCell className="font-medium text-gray-800 dark:text-white">
                      {sub.user?.username}
                    </TableCell>

                    <TableCell className="text-gray-600 dark:text-gray-300">
                      {sub.user?.email}
                    </TableCell>

                    <TableCell className="font-medium">
                      {sub.plan?.name}
                    </TableCell>

                    <TableCell>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          sub.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {sub.status.toUpperCase()}
                      </span>
                    </TableCell>

                    <TableCell>
                      {new Date(sub.startDate).toLocaleDateString()}
                    </TableCell>

                    <TableCell>
                      {new Date(sub.endDate).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
