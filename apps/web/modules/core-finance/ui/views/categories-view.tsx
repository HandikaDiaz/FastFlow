"use client";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import {
    FilterIcon,
    PlusIcon,
    SearchIcon,
    TrendingDownIcon,
    TrendingUpIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ItemCategoryCard from "../components/item-category-card";
import NoCategoryCard from "../components/no-category-card";
import OverviewCard from "../components/overview-card";

export const mockCategories = [
    {
        title: "Food & Dining",
        type: "expense",
        color: "#EF4444",
        icon: "🍔",
        isActive: true,
        monthlySpent: 1240000,
        monthlyIncome: 0,
        budget: 1500000,
        transactionCount: 24
    },
    {
        title: "Transportation",
        type: "expense",
        color: "#3B82F6",
        icon: "🚗",
        isActive: true,
        monthlySpent: 450000,
        monthlyIncome: 0,
        budget: 500000,
        transactionCount: 12
    },
    {
        title: "Shopping",
        type: "expense",
        color: "#8B5CF6",
        icon: "🛍️",
        isActive: true,
        monthlySpent: 750000,
        monthlyIncome: 0,
        budget: 1000000,
        transactionCount: 8
    },
    {
        title: "Entertainment",
        type: "expense",
        color: "#EC4899",
        icon: "🎬",
        isActive: true,
        monthlySpent: 300000,
        monthlyIncome: 0,
        budget: 400000,
        transactionCount: 6
    },
    {
        title: "Utilities",
        type: "expense",
        color: "#06B6D4",
        icon: "💡",
        isActive: true,
        monthlySpent: 650000,
        monthlyIncome: 0,
        budget: 700000,
        transactionCount: 5
    },
    {
        title: "Salary",
        type: "income",
        color: "#10B981",
        icon: "💰",
        isActive: true,
        monthlySpent: 0,
        monthlyIncome: 8500000,
        budget: 0,
        transactionCount: 2
    },
    {
        title: "Freelance",
        type: "income",
        color: "#F59E0B",
        icon: "💻",
        isActive: true,
        monthlySpent: 0,
        monthlyIncome: 5000000,
        budget: 0,
        transactionCount: 3
    }
];


export default function CategoriesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");

    const filteredCategories = mockCategories.filter(category => {
        const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === "all" || category.type === filterType;
        return matchesSearch && matchesType;
    });

    const expenseCategories = mockCategories.filter(c => c.type === "expense");
    const incomeCategories = mockCategories.filter(c => c.type === "income");

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                    <p className="text-muted-foreground">
                        Organize your transactions with categories
                    </p>
                </div>
                <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                    <Link href="/categories/new">
                        <PlusIcon className="h-4 w-4" />
                        Add Category
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <OverviewCard
                    title="Total Categories"
                    subtitle="All categories"
                    currency=""
                    balance={mockCategories.length}
                    icon={FilterIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />

                <OverviewCard
                    title="Income Categories"
                    subtitle="For tracking income"
                    balance={incomeCategories.length}
                    currency=""
                    icon={TrendingUpIcon}
                    balanceColor="text-green-600"
                    iconColor="text-green-600"
                    gradient="from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                />

                <OverviewCard
                    title="Expense Categories"
                    subtitle="For tracking expenses"
                    balance={expenseCategories.length}
                    currency=""
                    icon={TrendingDownIcon}
                    balanceColor="text-red-600"
                    iconColor="text-red-600"
                    gradient="from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20"
                />
            </div>

            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="flex flex-1 items-center gap-4">
                            <div className="relative flex-1 max-w-sm">
                                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search categories..."
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
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ItemCategoryCard
                    item={filteredCategories}
                />
                <NoCategoryCard />
            </div>
        </div>
    );
}