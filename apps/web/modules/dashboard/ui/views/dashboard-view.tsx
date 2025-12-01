"use client";
import ActionCardButton from "@/modules/core-finance/ui/components/action-card-button";
import OverviewCard from "@/modules/core-finance/ui/components/overview-card";
import OverviewTransactionCard from "@/modules/core-finance/ui/components/overview-transaction-card";
import OverviewWalletCard from "@/modules/core-finance/ui/components/overview-wallet-card";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { format } from "date-fns/format";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CalendarIcon,
    EyeIcon,
    PlusIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    WalletIcon
} from "lucide-react";
import Link from "next/link";

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

export default function DashboardPage() {
    const { totalBalance, monthlyIncome, monthlyExpenses, netFlow, wallets, recentTransactions } = mockData;
    const monthYear = format(new Date(), "MMMM yyyy");
    const isPositive = netFlow >= 0;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Overview of your financial health
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2">
                        <CalendarIcon className="h-4 w-4" />
                        {monthYear}
                    </Button>
                    <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                        <Link href="/transactions/new">
                            <PlusIcon className="h-4 w-4" />
                            Add Transaction
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <OverviewCard
                    title="Total Balance"
                    subtitle="Across all wallets"
                    balance={totalBalance}
                    icon={WalletIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />

                <OverviewCard
                    title="Monthly Income"
                    subtitle="This month"
                    balance={monthlyIncome}
                    icon={TrendingUpIcon}
                    prefix="+"
                    balanceColor="text-green-600"
                    iconColor="text-green-600"
                    gradient="from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                />

                <OverviewCard
                    title="Monthly Expenses"
                    subtitle="This month"
                    balance={monthlyExpenses}
                    icon={TrendingDownIcon}
                    prefix="-"
                    balanceColor="text-red-600"
                    iconColor="text-red-600"
                    gradient="from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20"
                />

                <OverviewCard
                    title="Net Flow"
                    subtitle="Income - Expenses"
                    icon={isPositive ? ArrowUpIcon : ArrowDownIcon}
                    balance={netFlow}
                    autoColor
                />

            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <OverviewTransactionCard
                    items={recentTransactions}
                />

                <div className="space-y-6">
                    <OverviewWalletCard
                        items={wallets}
                    />

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                <ActionCardButton
                                    title="Add Transaction"
                                    Icon={PlusIcon}
                                    href="/transactions/new"
                                />
                                <ActionCardButton
                                    title="Manage Wallets"
                                    Icon={WalletIcon}
                                    href="/wallets"
                                />
                                <ActionCardButton
                                    title="View Categories"
                                    Icon={EyeIcon}
                                    href="/categories"
                                />
                                <ActionCardButton
                                    title="All Transactions"
                                    Icon={CalendarIcon}
                                    href="/transactions"
                                />
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}