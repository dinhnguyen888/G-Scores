import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: "/", label: "Dashboard", icon: "📊" },
        { path: "/search", label: "Search Scores", icon: "🔍" },
        { path: "/reports", label: "Reports", icon: "📈" },
        { path: "/settings", label: "Settings", icon: "⚙️" },
    ];

    const isActive = (path: string) => {
        if (path === "/" && location.pathname === "/dashboard") return true;
        return location.pathname === path;
    };

    return (
        <div className="flex flex-col w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            {/* Logo */}
            <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-200 dark:border-gray-700">
                <span className="text-2xl">🎓</span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    G-Scores
                </h2>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="px-3 space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`
                                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                                    ${
                                        isActive(item.path)
                                            ? "bg-blue-500 text-white"
                                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }
                                `}
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p>Version 1.0.0</p>
            </div>
        </div>
    );
};

export default Sidebar;
