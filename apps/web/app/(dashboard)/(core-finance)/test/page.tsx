import { mockData } from "@/modules/constants";
import OverviewWalletCard from "@/modules/core-finance/ui/components/overview-wallet-card";

export default function Page() {
    const { totalBalance, monthlyIncome, monthlyExpenses, netFlow, wallets, recentTransactions } = mockData;

    return (
        <>
            <OverviewWalletCard
                items={wallets}
            />
        </>
    )
}