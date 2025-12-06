import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { BanknoteIcon, CreditCardIcon, EditIcon, EyeIcon, SmartphoneIcon, TrashIcon, WalletIcon } from "lucide-react";

interface WalletItemProps {
    title: string;
    balance: number;
    currency: string;
    type: string;
    institution: string;
    accountNumber?: string;
    isActive: boolean;
    color: string;
};

export default function OverviewWalletCard({
    title,
    balance,
    currency,
    type,
    institution,
    accountNumber,
    isActive,
    color
}: WalletItemProps) {
    const getWalletIcon = (type: string) => {
        switch (type) {
            case 'bank': return BanknoteIcon;
            case 'cash': return WalletIcon;
            case 'e-wallet': return SmartphoneIcon;
            case 'credit-card': return CreditCardIcon;
            default: return WalletIcon;
        }
    };

    const WalletIconComponent = getWalletIcon(type);

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'bank': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/20';
            case 'cash': return 'bg-green-100 text-green-600 dark:bg-green-900/20';
            case 'e-wallet': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/20';
            case 'credit-card': return 'bg-amber-100 text-amber-600 dark:bg-amber-900/20';
            default: return 'bg-gray-100 text-gray-600 dark:bg-gray-900/20';
        }
    };

    return (
        <Card className="relative overflow-hidden">
            <div
                className="absolute top-0 left-0 h-2 w-full"
                style={{ backgroundColor: color }}
            />
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getTypeColor(type)}`}>
                            <WalletIconComponent className="h-5 w-5" />
                        </div>
                        <div>
                            <CardTitle className="text-lg">
                                {title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground capitalize">
                                {type.replace('-', ' ')}
                            </p>
                        </div>
                    </div>

                    <Badge variant={isActive ? "default" : "secondary"}>
                        {isActive ? "Active" : "Inactive"}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full justify-between space-y-4">
                <div>
                    <div className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                        {balance >= 0 ? '+' : '-'}Rp {Math.abs(balance).toLocaleString('id-ID')}
                    </div>

                    <div className="space-y-2 text-sm">
                        {institution && (
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Institution:</span>
                                <span>{institution}</span>
                            </div>
                        )}
                        {accountNumber && (
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Account:</span>
                                <span>{accountNumber}</span>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Currency:</span>
                            <span>{currency}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <EyeIcon className="h-4 w-4" />
                        View
                    </Button>
                    <Button variant="default" size="sm" className="gap-2 hover:bg-gray-700 transition-colors">
                        <EditIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="sm" className="gap-2 hover:bg-red-500 ">
                        <TrashIcon className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};