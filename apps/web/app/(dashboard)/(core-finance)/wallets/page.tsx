import WalletsPage from "@/modules/core-finance/ui/views/wallets-view";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-svh p-5">
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <WalletsPage />
            </div>
        </div>
    );
};