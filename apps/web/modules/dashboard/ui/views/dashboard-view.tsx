"use client";
import { mockData } from "@/modules/constants";
import ActionCardButton from "@/modules/core-finance/ui/components/action-card-button";
import OverviewCard from "@/modules/core-finance/ui/components/overview-card";
import OverviewNoTransactionCard from "@/modules/core-finance/ui/components/overview-no-transaction-card";
import OverviewNoWalletCard from "@/modules/core-finance/ui/components/overview-no-wallet-card";
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

export default function DashboardPage() {
    const { totalBalance, monthlyIncome, monthlyExpenses, netFlow, wallets, recentTransactions } = mockData;
    const monthYear = format(new Date(), "MMMM yyyy");
    const isPositive = netFlow >= 0;

    return (
        <div className="w-full space-y-6">
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
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <OverviewCard
                    title="Total Balance"
                    subtitle="Across all wallets"
                    balance={totalBalance === 0 ? 0 : totalBalance}
                    currency="Rp"
                    icon={WalletIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />

                <OverviewCard
                    title="Monthly Income"
                    subtitle="This month"
                    balance={monthlyIncome === 0 ? 0 : monthlyIncome}
                    currency="Rp"
                    icon={TrendingUpIcon}
                    prefix="+"
                    balanceColor="text-green-600"
                    iconColor="text-green-600"
                    gradient="from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                />

                <OverviewCard
                    title="Monthly Expenses"
                    subtitle="This month"
                    balance={monthlyExpenses === 0 ? 0 : monthlyExpenses}
                    currency="Rp"
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
                    balance={netFlow === 0 ? 0 : netFlow}
                    currency="Rp"
                    autoColor
                />

            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {recentTransactions.length === 0 ? (
                    <OverviewNoTransactionCard />
                ) : (
                    <OverviewTransactionCard
                        items={recentTransactions}
                    />
                )}

                <div className="space-y-6">
                    {wallets.length === 0 ? (
                        <OverviewNoWalletCard />
                    ) : (
                        <OverviewWalletCard
                            items={wallets}
                        />
                    )}

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