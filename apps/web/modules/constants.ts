import { BarChartIcon, BrainIcon, ClockIcon, CreditCardIcon, FolderIcon, GamepadIcon, LayoutDashboardIcon, SettingsIcon, TargetIcon, TrophyIcon, WalletIcon } from "lucide-react";

export const mockData = {
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

export const coreFinanceItems = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboardIcon,
        enabled: true,
    },
    {
        title: "Transactions",
        url: "/transactions",
        icon: CreditCardIcon,
        enabled: true,
    },
    {
        title: "Wallets",
        url: "/wallets",
        icon: WalletIcon,
        enabled: true,
    },
    {
        title: "Categories",
        url: "/test",
        icon: FolderIcon,
        enabled: true,
    },
];

export const planningItems = [
    {
        title: "Targets",
        url: "/targets",
        icon: TargetIcon,
        enabled: false,
    },
    {
        title: "Goals",
        url: "/goals",
        icon: TrophyIcon,
        enabled: false,
    },
];

export const analyticsItems = [
    {
        title: "AI Insights",
        url: "/ai",
        icon: BrainIcon,
        enabled: false,
    },
    {
        title: "Reports",
        url: "/reports",
        icon: BarChartIcon,
        enabled: false,
    },
];

export const advancedItems = [
    {
        title: "Time Machine",
        url: "/time-machine",
        icon: ClockIcon,
        enabled: false,
    },
    {
        title: "Challenges",
        url: "/challenges",
        icon: GamepadIcon,
        enabled: false,
    },
];

export const accountItems = [
    {
        title: "Settings",
        url: "/settings",
        icon: SettingsIcon,
        enabled: true,
    },
];