import AuthGuard from "@/modules/auth/ui/components/auth-guard";
import { SidebarProvider } from '@workspace/ui/components/sidebar';
import { Provider } from "jotai";
import DashboardSidebar from "../components/dashboard-sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard>
            <Provider>
                <SidebarProvider>
                    <DashboardSidebar />
                    <main className="flex flex-1 flex-col">
                        {children}
                    </main>
                </SidebarProvider>
            </Provider>
        </AuthGuard>
    );
};