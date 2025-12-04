"use client";
import { mockData } from "@/modules/constants";
import ItemCategoryCard from "@/modules/core-finance/ui/components/item-category-card";
import NoCategoryCard from "@/modules/core-finance/ui/components/no-category-card";
import { mockCategories } from "@/modules/core-finance/ui/views/categories-view";

export default function Page() {
    const { totalBalance, monthlyIncome, monthlyExpenses, netFlow, wallets, recentTransactions } = mockData;
    
    return (
        <>
            <ItemCategoryCard
                item={mockCategories}
            />
            <NoCategoryCard />
        </>
    )
}