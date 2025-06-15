import { useState } from "react";
import { useStudentScores } from "../hooks/useStudentScores";

const SearchScores = () => {
    const [registrationNumber, setRegistrationNumber] = useState("");
    const { student, loading, error, searchScores } = useStudentScores();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        await searchScores(registrationNumber);
    };

    const subjects = [
        { key: "math", label: "Math" },
        { key: "literature", label: "Literature" },
        { key: "english", label: "English" },
        { key: "physics", label: "Physics" },
        { key: "chemistry", label: "Chemistry" },
        { key: "biology", label: "Biology" },
        { key: "history", label: "History" },
        { key: "geography", label: "Geography" },
        { key: "civic_education", label: "Civic Education" },
    ] as const;

    const getScoreColor = (score: number | null) => {
        if (score === null) return "";
        if (score >= 8) return "text-emerald-500";
        if (score >= 6) return "text-blue-500";
        if (score >= 4) return "text-amber-500";
        return "text-red-500";
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Search Student Scores
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
                <div className="p-6">
                    <form onSubmit={handleSearch}>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter registration number..."
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900/50
                                    border border-gray-200 dark:border-gray-700
                                    text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                                    focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                value={registrationNumber}
                                onChange={(e) =>
                                    setRegistrationNumber(e.target.value)
                                }
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium
                                    hover:bg-blue-600 active:bg-blue-700 
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    transition-colors duration-200"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="animate-spin h-4 w-4"
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
                                        <span>Searching...</span>
                                    </div>
                                ) : (
                                    "Search"
                                )}
                            </button>
                        </div>
                        {error && (
                            <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {student && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            Student Score Results
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                            Registration: {student.registration_number}
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-sm font-semibold bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                                            Subject
                                        </th>
                                        <th className="px-6 py-3 text-sm font-semibold bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400">
                                            Score
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {subjects.map(({ key, label }) => (
                                        <tr
                                            key={key}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-900/50"
                                        >
                                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                                {label}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`font-semibold ${getScoreColor(
                                                        student[key]
                                                    )}`}
                                                >
                                                    {student[key] === null
                                                        ? "-"
                                                        : student[key]}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchScores;
