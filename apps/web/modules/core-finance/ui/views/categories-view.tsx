"use client";
import { Button } from "@workspace/ui/components/button";
import {
    FilterIcon,
    PlusIcon,
    TrendingDownIcon,
    TrendingUpIcon
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import FilterCard from "../components/filter-card";
import ItemCategoryCard from "../components/item-category-card";
import AddCard from "../components/add-card";
import OverviewCard from "../components/overview-card";
import { mockCategories } from "@/modules/constants";

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
        <div className="w-full space-y-6">
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

            <FilterCard
                searchTitle="Search categories..."
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterType={filterType}
                setFilterType={setFilterType}
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ItemCategoryCard
                    item={filteredCategories}
                />
                <AddCard 
                    title="Add New Category"
                    subtitle="Create a custom category for your transactions"
                    buttonName="Add Category"
                />
            </div>
        </div>
    );
}