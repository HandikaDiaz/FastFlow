"use client";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    DownloadIcon,
    EyeIcon,
    FilterIcon,
    PlusIcon,
    SearchIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import OverviewCard from "../components/overview-card";
import OverviewNoTransactionCard from "../components/overview-no-transaction-card";
import OverviewTransactionCard from "../components/overview-transaction-card";

const mockTransactions = [
    {
        title: "Gaji Bulanan Maret",
        amount: 8500000,
        type: "income",
        createdAt: "2024-03-25",
        category: "Salary",
        wallet: "BCA Savings",
        currency: "IDR"
    },
    {
        title: "Bayar Listrik PLN",
        amount: -450000,
        type: "expense",
        createdAt: "2024-03-24",
        category: "Utilities",
        wallet: "BCA Savings",
        currency: "IDR"
    },
    {
        title: "Makan Siang dengan Tim",
        amount: -75000,
        type: "expense",
        createdAt: "2024-03-24",
        category: "Food & Dining",
        wallet: "Cash",
        currency: "IDR"
    },
    {
        title: "Bensin Motor",
        amount: -50000,
        type: "expense",
        createdAt: "2024-03-23",
        category: "Transportation",
        wallet: "Cash",
        currency: "IDR"
    },
    {
        title: "Freelance Web Development",
        amount: 2500000,
        type: "income",
        createdAt: "2024-03-22",
        category: "Freelance",
        wallet: "BCA Savings",
        currency: "IDR"
    },
    {
        title: "Belanja Bulanan",
        amount: -350000,
        type: "expense",
        createdAt: "2024-03-21",
        category: "Shopping",
        wallet: "BCA Savings",
        currency: "IDR"
    }
];

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

            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-1 items-center gap-4">
                            <div className="relative flex-1 max-w-sm">
                                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search transactions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-9"
                                />
                            </div>

                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="flex h-10 w-32 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                                <option value="all">All Types</option>
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <FilterIcon className="h-4 w-4" />
                                More Filters
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                                <DownloadIcon className="h-4 w-4" />
                                Export
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

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