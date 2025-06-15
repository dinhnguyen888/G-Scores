import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar for desktop */}
            <div className="hidden lg:flex">
                <Sidebar />
            </div>

            {/* Mobile sidebar */}
            <div className="lg:hidden">
                <input
                    type="checkbox"
                    id="sidebar-mobile"
                    className="peer hidden"
                />
                <label
                    htmlFor="sidebar-mobile"
                    className="fixed inset-0 z-20 hidden bg-black/50 peer-checked:block"
                />
                <div
                    className="fixed inset-y-0 left-0 z-30 w-64 -translate-x-full 
                    peer-checked:translate-x-0 transition-transform duration-300"
                >
                    <Sidebar />
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <TopBar />
                <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
