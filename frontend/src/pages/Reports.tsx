import { useScoreStatistics } from "../hooks/useScoreStatistics";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Reports = () => {
    const { stats, loading, error } = useScoreStatistics();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
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
        );
    }

    if (error) {
        return (
            <div className="rounded-lg bg-red-50 dark:bg-red-900/50 p-4 text-red-500 dark:text-red-200">
                <span>{error}</span>
            </div>
        );
    }

    const chartData = stats.map((subject) => ({
        subject: subject.subject
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        "Trên 8 điểm": subject.levels.excellent,
        "Từ 6 đến 8 điểm": subject.levels.good,
        "Từ 4 đến 6 điểm": subject.levels.average,
        "Dưới 4 điểm": subject.levels.poor,
    }));

    const colors: { [key: string]: string } = {
        "Trên 8 điểm": "#10b981", // emerald
        "Từ 6 đến 8 điểm": "#3b82f6", // blue
        "Từ 4 đến 6 điểm": "#f59e0b", // amber
        "Dưới 4 điểm": "#ef4444", // red
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Báo cáo phân bố điểm số
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                    <div className="h-[600px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 70,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#e5e7eb"
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="subject"
                                    angle={-45}
                                    textAnchor="end"
                                    height={60}
                                    interval={0}
                                    tick={{ fill: "#6b7280", fontSize: 12 }}
                                />
                                <YAxis
                                    tick={{ fill: "#6b7280", fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #e5e7eb",
                                        borderRadius: "0.5rem",
                                        boxShadow:
                                            "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                                    }}
                                />
                                <Legend
                                    verticalAlign="top"
                                    height={36}
                                    formatter={(value) => (
                                        <span style={{ color: colors[value] }}>
                                            {value}
                                        </span>
                                    )}
                                />
                                <Bar
                                    dataKey="Trên 8 điểm"
                                    fill={colors["Trên 8 điểm"]}
                                    radius={[4, 4, 0, 0]}
                                    stackId="stack"
                                />
                                <Bar
                                    dataKey="Từ 6 đến 8 điểm"
                                    fill={colors["Từ 6 đến 8 điểm"]}
                                    radius={[4, 4, 0, 0]}
                                    stackId="stack"
                                />
                                <Bar
                                    dataKey="Từ 4 đến 6 điểm"
                                    fill={colors["Từ 4 đến 6 điểm"]}
                                    radius={[4, 4, 0, 0]}
                                    stackId="stack"
                                />
                                <Bar
                                    dataKey="Dưới 4 điểm"
                                    fill={colors["Dưới 4 điểm"]}
                                    radius={[4, 4, 0, 0]}
                                    stackId="stack"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
