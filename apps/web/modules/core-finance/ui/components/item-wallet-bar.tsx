import { WalletIcon } from "lucide-react";

export interface WalletItemProps {
    title: string;
    balance: number;
    currency: string;
    type: string
};

export default function ItemWalletCard({
    title,
    balance,
    currency,
    type,
}: WalletItemProps) {
    return (
        <div
            key={title}
            className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20">
                    <WalletIcon className="h-5 w-5" />
                </div>
                <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                        {type} • {currency}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">
                    Rp {balance.toLocaleString('id-ID')}
                </p>
            </div>
        </div>
    );
};