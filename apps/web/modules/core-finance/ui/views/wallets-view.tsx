// app/wallets/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import {
    PlusIcon,
    WalletIcon,
    BanknoteIcon,
    CreditCardIcon,
    SmartphoneIcon,
    EyeIcon,
    EditIcon,
    TrashIcon,
    TrendingUpIcon,
    TrendingDownIcon
} from "lucide-react";
import Link from "next/link";

// Mock data untuk wallets
const mockWallets = [
    {
        id: "1",
        name: "BCA Savings",
        balance: 12450000,
        currency: "IDR",
        type: "bank",
        institution: "Bank Central Asia",
        accountNumber: "123-456-789",
        isActive: true,
        color: "#3b82f6"
    },
    {
        id: "2",
        name: "Cash",
        balance: 2790000,
        currency: "IDR",
        type: "cash",
        institution: "Cash",
        isActive: true,
        color: "#10b981"
    },
    {
        id: "3",
        name: "GoPay",
        balance: 450000,
        currency: "IDR",
        type: "e-wallet",
        institution: "Gojek",
        isActive: true,
        color: "#00aa13"
    },
    {
        id: "4",
        name: "BCA Credit Card",
        balance: -1250000,
        currency: "IDR",
        type: "credit-card",
        institution: "Bank Central Asia",
        isActive: true,
        color: "#f59e0b"
    }
];

const getWalletIcon = (type: string) => {
    switch (type) {
        case 'bank': return BanknoteIcon;
        case 'cash': return WalletIcon;
        case 'e-wallet': return SmartphoneIcon;
        case 'credit-card': return CreditCardIcon;
        default: return WalletIcon;
    }
};

const getTypeColor = (type: string) => {
    switch (type) {
        case 'bank': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/20';
        case 'cash': return 'bg-green-100 text-green-600 dark:bg-green-900/20';
        case 'e-wallet': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/20';
        case 'credit-card': return 'bg-amber-100 text-amber-600 dark:bg-amber-900/20';
        default: return 'bg-gray-100 text-gray-600 dark:bg-gray-900/20';
    }
};

export default function WalletsPage() {
    const totalBalance = mockWallets.reduce((sum, wallet) => sum + wallet.balance, 0);
    const activeWallets = mockWallets.filter(wallet => wallet.isActive).length;

    return (
        <div className="space-y-6">
            {/* === PAGE HEADER === */}
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

            {/* === QUICK STATS === */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                        <WalletIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${totalBalance >= 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {totalBalance >= 0 ? '+' : ''}Rp {Math.abs(totalBalance).toLocaleString('id-ID')}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Across all wallets
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Wallets</CardTitle>
                        <EyeIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeWallets}</div>
                        <p className="text-xs text-muted-foreground">
                            Currently active
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Wallet Types</CardTitle>
                        <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{new Set(mockWallets.map(w => w.type)).size}</div>
                        <p className="text-xs text-muted-foreground">
                            Different types
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* === WALLETS GRID === */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockWallets.map((wallet) => {
                    const WalletIconComponent = getWalletIcon(wallet.type);

                    return (
                        <Card key={wallet.id} className="relative overflow-hidden">
                            {/* Color Accent */}
                            <div
                                className="absolute top-0 left-0 h-2 w-full"
                                style={{ backgroundColor: wallet.color }}
                            />

                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getTypeColor(wallet.type)}`}>
                                            <WalletIconComponent className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">{wallet.name}</CardTitle>
                                            <p className="text-sm text-muted-foreground capitalize">
                                                {wallet.type.replace('-', ' ')}
                                            </p>
                                        </div>
                                    </div>

                                    <Badge variant={wallet.isActive ? "default" : "secondary"}>
                                        {wallet.isActive ? "Active" : "Inactive"}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                {/* Balance */}
                                <div className={`text-2xl font-bold ${wallet.balance >= 0 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                    {wallet.balance >= 0 ? '+' : '-'}Rp {Math.abs(wallet.balance).toLocaleString('id-ID')}
                                </div>

                                {/* Wallet Details */}
                                <div className="space-y-2 text-sm">
                                    {wallet.institution && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Institution:</span>
                                            <span>{wallet.institution}</span>
                                        </div>
                                    )}
                                    {wallet.accountNumber && (
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Account:</span>
                                            <span>{wallet.accountNumber}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Currency:</span>
                                        <span>{wallet.currency}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 pt-2">
                                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                                        <EyeIcon className="h-4 w-4" />
                                        View
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-2">
                                        <EditIcon className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700">
                                        <TrashIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}

                {/* Add New Wallet Card */}
                <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
                    <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-muted p-3 mb-4">
                            <PlusIcon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold">Add New Wallet</h3>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                            Create a new wallet to track your finances
                        </p>
                        <Button asChild className="mt-4">
                            <Link href="/wallets/new">
                                <PlusIcon className="h-4 w-4 mr-2" />
                                Add Wallet
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}