const TopBar = () => {
    return (
        <header className="sticky top-0 z-10 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Mobile menu button */}
                    <label
                        htmlFor="sidebar-mobile"
                        className="lg:hidden -ml-2 p-2 rounded-lg text-gray-600 dark:text-gray-300
                            hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    {/* Title - Only show on mobile */}
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white lg:hidden">
                        G-Scores
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
