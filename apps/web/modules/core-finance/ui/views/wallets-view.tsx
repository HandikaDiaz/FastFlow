"use client";
import { Button } from "@workspace/ui/components/button";
import {
    EyeIcon,
    PlusIcon,
    TrendingUpIcon,
    WalletIcon
} from "lucide-react";
import Link from "next/link";
import AddCard from "../components/add-card";
import OverviewCard from "../components/overview-card";
import OverviewWalletCard from "../components/overview-wallet-card";
import { mockWallets } from "@/modules/constants";

export default function WalletsPage() {
    const totalBalance = mockWallets.reduce((sum, wallet) => sum + wallet.balance, 0);

    return (
        <div className="w-full h-full space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Wallets</h1>
                    <p className="text-muted-foreground">
                        Manage your financial accounts
                    </p>
                </div>
                <Button asChild className="gap-2 bg-primary hover:bg-primary/90">
                    <Link href="/wallets/new">
                        <PlusIcon className="h-4 w-4" />
                        Add Wallet
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <OverviewCard
                    title="Total Balance"
                    subtitle="Across all wallets"
                    balance={totalBalance}
                    prefix="+"
                    currency="Rp"
                    icon={WalletIcon}
                    balanceColor="text-green-600"
                    iconColor="text-green-600"
                    gradient="from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
                />

                <OverviewCard
                    title="Active Wallets"
                    subtitle="Currently active"
                    currency=""
                    balance={mockWallets.length}
                    icon={EyeIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />

                <OverviewCard
                    title="Wallet Types"
                    subtitle="Different types"
                    currency=""
                    balance={new Set(mockWallets.map(w => w.type)).size}
                    icon={TrendingUpIcon}
                    gradient="from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockWallets.map((wallet, index) => {
                    return (
                        <OverviewWalletCard
                            key={index}
                            title={wallet.title}
                            balance={wallet.balance}
                            currency={wallet.currency}
                            type={wallet.type}
                            institution={wallet.institution}
                            accountNumber={wallet.accountNumber}
                            isActive={wallet.isActive}
                            color={wallet.color}
                        />
                    );
                })}

                <AddCard
                    title="Add New Wallet"
                    subtitle="Create a new wallet to track your finances"
                    buttonName="Add Wallet"
                />
            </div>
        </div>
    );
}