"use client";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { EditIcon, EyeIcon, TrashIcon } from "lucide-react";

interface CategoryItem {
    title: string;
    type: string;
    icon: string;
    color: string;
    isActive: boolean;
    transactionCount: number;
    monthlyIncome: number;
    monthlySpent: number;
    budget: number;
};

interface ItemCategoryCardProps {
    item: CategoryItem[];
};

export default function ItemCategoryCard({
    item
}: ItemCategoryCardProps) {
    console.log("item", item);
    const getCategoryIcon = (icon: string) => {
        return <span className="text-lg">{icon}</span>;
    };

    return (
        <>
            {item.map((category) => {
                return (
                    <Card key={category.title} className="relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-1.5 w-full"
                            style={{ backgroundColor: category.color }}
                        />
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-b">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{ backgroundColor: category.color + '20' }}>
                                    {getCategoryIcon(category.icon)}
                                </div>
                                <div className="flex-1 ml-4">
                                    <CardTitle className="text-lg">
                                        {category.title}
                                    </CardTitle>
                                    <Badge
                                        variant={category.type === "income" ? "default" : "secondary"}
                                        className={category.type === "income" ? "bg-green-100 text-green-800 hover:bg-green-100" : "bg-red-100 text-red-800 hover:bg-red-100"}>
                                        {category.type === "income" ? "Income" : "Expense"}
                                    </Badge>
                                </div>
                            </div>

                            <Badge variant={category.isActive ? "default" : "secondary"}>
                                {category.isActive ? "Active" : "Inactive"}
                            </Badge>
                        </CardHeader>

                        <CardContent className="flex flex-col justify-between h-full space-y-3">
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Transaction:
                                    </span>
                                    <span className="font-medium">
                                        {category.transactionCount}
                                    </span>
                                </div>

                                {category.type === "expense" && category.budget > 0 && (
                                    <>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">
                                                Monthly Spent:
                                            </span>
                                            <span className="font-medium">
                                                Rp {category.monthlySpent?.toLocaleString("id-ID")}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">
                                                Budget:
                                            </span>
                                            <span className="text-medium">
                                                Rp {category.budget.toLocaleString("id-ID")}
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full"
                                                style={{
                                                    backgroundColor: category.color,
                                                    width: `${Math.min((category.monthlySpent / category.budget) * 100, 100)}%`
                                                }}
                                            />
                                        </div>

                                        <div className="flex justify-between text-xs">
                                            <span className="text-muted-foreground">
                                                {Math.round((category.monthlySpent / category.budget) * 100)}%
                                            </span>
                                            <span className="text-muted-foreground">
                                                Rp {(category.budget - category.monthlySpent).toLocaleString("id-ID")} left
                                            </span>
                                        </div>
                                    </>
                                )}
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
                )
            })}
        </>
    );
};