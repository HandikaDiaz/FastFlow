import { BarChartIcon, BrainIcon, ClockIcon, CreditCardIcon, FolderIcon, GamepadIcon, LayoutDashboardIcon, SettingsIcon, TargetIcon, TrophyIcon, WalletIcon } from "lucide-react";

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