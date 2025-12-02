"use client";
import DashboardPage from "@/modules/dashboard/ui/views/dashboard-view";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh p-5">
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <DashboardPage />
      </div>
    </div>
  )
}
