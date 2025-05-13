import { Outlet } from 'react-router';
import { AppSidebar } from '@/components/app-sidebar';

export function AppLayout() {
    return (
        <div className="flex h-screen bg-background">
            <AppSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
