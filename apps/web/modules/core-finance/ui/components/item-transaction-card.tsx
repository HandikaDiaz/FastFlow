"use client";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { ArrowDownIcon, ArrowUpIcon, EditIcon, EyeIcon, TrashIcon } from "lucide-react";

export interface TransactionItemProps {
    title: string;
    category: string;
    amount: number;
    createdAt: string;
    type: string
    wallet?: string;
    isSpecificPage?: boolean
};

export default function ItemTransactionCard({
    title,
    category,
    amount,
    createdAt,
    type,
    wallet,
    isSpecificPage
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
                        {isSpecificPage && (
                            <span className="text-xs text-muted-foreground">
                                {wallet}
                            </span>
                        )}
                        <span className="text-xs text-muted-foreground">
                            {new Date(createdAt).toLocaleDateString('id-ID')}
                        </span>
                    </div>
                </div>
            </div>
            <div className={`text-right font-semibold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                {type === 'income' ? '+' : '-'}Rp {Math.abs(amount).toLocaleString('id-ID')}
                {isSpecificPage && (
                    <div className="flex items-center gap-2 ml-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary/50">
                            <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary/50">
                            <EditIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-600/50">
                            <TrashIcon className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>

        </div>
    );
};