"use client";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@workspace/ui/components/select";
import { FilterIcon, SearchIcon } from "lucide-react";

interface FilterCardProps {
    searchTitle: string;
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    filterType: string;
    setFilterType: (filterType: string) => void;
};

export default function FilterCard({
    searchTitle = "Search...",
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
}: FilterCardProps) {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="relative max-w-sm">
                            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder={searchTitle}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-9"
                            />
                        </div>

                        <div className="flex gap-4">
                            <Select value={filterType} onValueChange={setFilterType}>
                                <SelectTrigger className="w-[140px]">
                                    <FilterIcon className="h-4 w-4" />
                                    <SelectValue placeholder="Filters" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Types</SelectLabel>
                                        <SelectItem value="all">All Types</SelectItem>
                                        <SelectItem value="expense">Expense</SelectItem>
                                        <SelectItem value="income">Income</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={() => { }}>
                                <SelectTrigger className="w-[140px]" disabled>
                                    <FilterIcon className="h-4 w-4" />
                                    <SelectValue placeholder="Group By" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Date</SelectLabel>
                                        <SelectItem value="all">All Date</SelectItem>
                                        <SelectItem value="expense">This Month</SelectItem>
                                        <SelectItem value="income">This Year</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};