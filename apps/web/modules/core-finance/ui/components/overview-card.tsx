import { ElementType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

interface OverviewCardProps {
    title: string;
    subtitle: string;
    balance: number;
    icon: ElementType;
    gradient?: string;
    autoColor?: boolean;
    balanceColor?: string;
    iconColor?: string;
    prefix?: string;
    className?: string;
}

export default function OverviewCard({
    title,
    subtitle,
    balance,
    icon: Icon,
    gradient,
    autoColor = false,
    balanceColor,
    iconColor,
    prefix = "",
    className,
}: OverviewCardProps) {
    const isPositive = balance >= 0;

    const autoGradient = isPositive
        ? "from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20"
        : "from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20";
    const autobalanceColor = isPositive ? "text-green-600" : "text-red-600";
    const autoPrefix = isPositive ? "+" : "-";
    const autoIconColor = isPositive ? "text-green-600" : "text-red-600";

    return (
        <Card className={cn("bg-gradient-to-br", autoColor ? autoGradient : gradient, className)}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>

                <Icon className={cn("h-4 w-4", autoColor ? autoIconColor : iconColor)} />
            </CardHeader>

            <CardContent>
                <div className={cn("text-2xl font-bold", autoColor ? autobalanceColor : balanceColor)}>
                    {autoColor ? autoPrefix : prefix}
                    Rp {Math.abs(balance).toLocaleString("id-ID")}
                </div>

                <p className="text-xs text-muted-foreground">{subtitle}</p>
            </CardContent>
        </Card>
    );
}
