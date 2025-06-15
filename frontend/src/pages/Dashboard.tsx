import { useTopStudents } from "../hooks/useTopStudents";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const { students, loading, error } = useTopStudents();

    const features = [
        {
            title: "Search Scores",
            description: "Look up individual student scores",
            icon: "🔍",
            path: "/search",
        },
        {
            title: "Score Statistics",
            description: "View score distribution charts",
            icon: "📈",
            path: "/reports",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature) => (
                    <Link
                        key={feature.path}
                        to={feature.path}
                        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm 
                            border border-gray-200 dark:border-gray-700
                            hover:border-blue-500 dark:hover:border-blue-500
                            transition-colors duration-200"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-3xl">{feature.icon}</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Top Students Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Top Students - Group A
                    </h2>

                    {loading ? (
                        <div className="flex justify-center py-8">
                            <svg
                                className="animate-spin h-8 w-8 text-blue-500"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                            </svg>
                        </div>
                    ) : error ? (
                        <div className="text-red-500 dark:text-red-400">
                            {error}
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Rank
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Registration
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Math
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Physics
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Chemistry
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {students
                                        .slice(0, 10)
                                        .map((student, index) => (
                                            <tr
                                                key={
                                                    student.registration_number
                                                }
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                                                    <span
                                                        className={`
                                                    inline-flex items-center justify-center w-6 h-6 text-sm font-semibold rounded-full
                                                    ${
                                                        index === 0
                                                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                            : index === 1
                                                            ? "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                                                            : index === 2
                                                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                                                            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                                    }
                                                `}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                    {
                                                        student.registration_number
                                                    }
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                                    {student.math}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                                    {student.physics}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300">
                                                    {student.chemistry}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900 dark:text-white">
                                                    {student.total_score}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
