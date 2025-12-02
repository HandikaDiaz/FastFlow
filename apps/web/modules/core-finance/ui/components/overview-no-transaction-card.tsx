import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { WalletIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function OverviewNoTransactionCard() {
    return (
        <Card className="flex flex-col justify-center">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3">
                    <WalletIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No transactions yet</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                    Start tracking your finances by adding your first transaction
                </p>
                <Button asChild className="mt-4">
                    <Link href="/transactions/new">
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Add Your First Transaction
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};