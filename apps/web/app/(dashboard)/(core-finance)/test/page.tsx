import OverviewWalletCard from "@/modules/core-finance/ui/components/overview-wallet-card";


const mockData = {
    totalBalance: 15240000,
    monthlyIncome: 8500000,
    monthlyExpenses: 9740000,
    netFlow: -1240000,
    wallets: [
        { title: "BCA Savings", balance: 12450000, currency: "IDR", type: "bank" },
        { title: "Cash", balance: 2790000, currency: "IDR", type: "cash" },
    ],
    recentTransactions: [
        { title: "Gaji Bulanan", amount: 8500000, type: "income", createdAt: "2024-03-25", category: "Salary" },
        { title: "Bayar Listrik", amount: -450000, type: "expense", createdAt: "2024-03-24", category: "Utilities" },
        { title: "Makan Siang", amount: -75000, type: "expense", createdAt: "2024-03-24", category: "Food" },
        { title: "Bensin Motor", amount: -50000, type: "expense", createdAt: "2024-03-23", category: "Transportation" },
        { title: "Freelance Project", amount: 2500000, type: "income", createdAt: "2024-03-22", category: "Freelance" },
    ]
};

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