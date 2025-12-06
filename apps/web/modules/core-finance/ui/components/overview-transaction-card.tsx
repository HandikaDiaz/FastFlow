"use client";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import ItemTransactionCard, { TransactionItemProps } from "./item-transaction-card";
import { usePathname } from "next/navigation";

export interface OverviewTransactionCardProps {
    items: TransactionItemProps[];
};

export default function OverviewTransactionCard({
    items
}: OverviewTransactionCardProps) {
    const path = usePathname();
    const isTransactionsPage = path.includes('transactions');

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>
                    Recent Transaction
                </CardTitle>

                {!isTransactionsPage && (
                    <Button asChild variant="ghost">
                        <Link href="/transactions">
                            <EyeIcon className="h-4 w-4" />
                            View All
                        </Link>
                    </Button>
                )}
            </CardHeader>

            <CardContent className="space-y-4">
                {items.map((item) => {
                    return (
                        <ItemTransactionCard
                            key={item.title}
                            isSpecificPage={isTransactionsPage}
                            {...item} />
                    )
                })}
            </CardContent>
        </Card>
    );
};