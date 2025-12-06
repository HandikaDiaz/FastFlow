"use client";
import { Button } from "@workspace/ui/components/button";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    EyeIcon,
    PlusIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FilterCard from "../components/filter-card";
import OverviewNoTransactionCard from "../components/no-transaction-card";
import OverviewCard from "../components/overview-card";
import OverviewTransactionCard from "../components/overview-transaction-card";
import { mockTransactions } from "@/modules/constants";

export default function TransactionsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");

    const filteredTransactions = mockTransactions.filter(transaction => {
        const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === "all" || transaction.type === filterType;
        return matchesSearch && matchesType;
    });

    const totalIncome = mockTransactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = mockTransactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    return (
        <div className="w-full space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                    <p className="text-muted-foreground">
                        Manage your income and expenses
                    </p>
                </div>
                <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                    <Link href="/transactions/new">
                        <PlusIcon className="h-4 w-4" />
                        Add Transaction
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <OverviewCard
                    title="Total Transactions"
                    subtitle="All time"
                    currency=""
                    balance={mockTransactions.length}
                    icon={EyeIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />

                <OverviewCard
                    title="Total Income"
                    subtitle="All time"
                    balance={totalIncome}
                    currency="Rp"
                    icon={ArrowUpIcon}
                    balanceColor="text-green-600"
                    iconColor="text-green-600"
                    gradient="from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                />

                <OverviewCard
                    title="Monthly Expenses"
                    subtitle="All time"
                    balance={totalExpenses}
                    currency="Rp"
                    icon={ArrowDownIcon}
                    balanceColor="text-red-600"
                    iconColor="text-red-600"
                    gradient="from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20"
                />
            </div>

            <FilterCard
                searchTitle="Search transactions..."
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterType={filterType}
                setFilterType={setFilterType}
            />


            {filteredTransactions.length === 0 ? (
                <OverviewNoTransactionCard />
            ) : (
                <OverviewTransactionCard
                    items={filteredTransactions}
                />
            )}
        </div>
    );
}