import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function OverviewNoWalletCard() {
    return (
        <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                    <PlusIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Add New Wallet</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Create a new wallet to track your finances
                </p>
                <Button asChild className="mt-4">
                    <Link href="/wallets/new">
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Add Wallet
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};