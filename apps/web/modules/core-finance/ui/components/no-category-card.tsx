import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function NoCategoryCard() {
    return (
        <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-muted p-3 mb-4">
                    <PlusIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">
                    Add New Category
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Create a custom category for your transactions
                </p>
                <Button className="mt-4">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Category
                </Button>
            </CardContent>
        </Card>
    );
};