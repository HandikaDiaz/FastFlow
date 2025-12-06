import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import ItemWalletCard, { WalletItemProps } from "./item-wallet-bar";

export interface OverviewWalletCardProps {
    items: WalletItemProps[];
};

export default function OverviewWalletBar({
    items
}: OverviewWalletCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>
                    Your Wallets
                </CardTitle>

            </CardHeader>
            <CardContent className="space-y-4">
                {items.map((item) => {
                    return (
                        <ItemWalletCard
                            key={item.title}
                            {...item} />
                    )
                })}
                <Button asChild variant="outline" className="w-full gap-2">
                    <Link href="/wallets">
                        <EyeIcon className="h-4 w-4" />
                        View All
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
};