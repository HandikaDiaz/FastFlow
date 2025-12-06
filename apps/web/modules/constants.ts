import { BarChartIcon, BrainIcon, ClockIcon, CreditCardIcon, FolderIcon, GamepadIcon, LayoutDashboardIcon, SettingsIcon, TargetIcon, TrophyIcon, WalletIcon } from "lucide-react";

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

export const mockWallets = [
    {
        id: "1",
        title: "BCA Savings",
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
        title: "Cash",
        balance: 2790000,
        currency: "IDR",
        type: "cash",
        institution: "Cash",
        isActive: true,
        color: "#10b981"
    },
    {
        id: "3",
        title: "GoPay",
        balance: 450000,
        currency: "IDR",
        type: "e-wallet",
        institution: "Gojek",
        isActive: true,
        color: "#00aa13"
    },
    {
        id: "4",
        title: "BCA Credit Card",
        balance: -1250000,
        currency: "IDR",
        type: "credit-card",
        institution: "Bank Central Asia",
        isActive: true,
        color: "#f59e0b"
    }
];

export const mockTransactions = [
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
        url: "/categories",
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