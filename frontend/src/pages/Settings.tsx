import { useState } from "react";

const Settings = () => {
    // Simulate a theme toggle state
    const [isDark, setIsDark] = useState(true);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Settings
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Theme
                        </h3>
                        <button
                            onClick={() => setIsDark(!isDark)} // giả lập toggle
                            className="flex items-center gap-4 p-4 rounded-xl 
                                bg-gray-50 dark:bg-gray-900/50
                                border border-gray-200 dark:border-gray-700 
                                hover:border-blue-500 dark:hover:border-blue-500 
                                transition-colors duration-200"
                        >
                            {isDark ? (
                                <>
                                    <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white">
                                        🌙
                                    </div>
                                    <div className="text-gray-900 dark:text-white">
                                        <div className="font-medium">
                                            Dark Theme
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Click to switch to light mode
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        ☀️
                                    </div>
                                    <div className="text-gray-900 dark:text-white">
                                        <div className="font-medium">
                                            Light Theme
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Click to switch to dark mode
                                        </div>
                                    </div>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
