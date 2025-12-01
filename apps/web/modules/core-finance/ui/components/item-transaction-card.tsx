import { Badge } from "@workspace/ui/components/badge";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export interface TransactionItemProps {
    title: string;
    category: string;
    amount: number;
    createdAt: string;
    type: string
};

export default function ItemTransactionCard({
    title,
    category,
    amount,
    createdAt,
    type,
}: TransactionItemProps) {
    return (
        <div
            key={title}
            className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted/50">
            <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full 
                    ${type === 'income'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'}`
                }>
                    {type === 'income' ? (
                        <ArrowUpIcon className="h-4 w-4" />
                    ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                    )}
                </div>
                <div>
                    <p className="font-medium">
                        {title}
                    </p>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                            {category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            {new Date(createdAt).toLocaleDateString('id-ID')}
                        </span>
                    </div>
                </div>
            </div>
            <div className={`font-semibold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {type === 'income' ? '+' : '-'}Rp {Math.abs(amount).toLocaleString('id-ID')}
            </div>
        </div>
    );
};