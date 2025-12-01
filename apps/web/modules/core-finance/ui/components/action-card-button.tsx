import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

interface ActionCardButtonProps {
    title: string;
    Icon: React.ElementType;
    href: string;
};

export default function ActionCardButton({
    title,
    Icon,
    href
}: ActionCardButtonProps) {
    return (
        <Button asChild variant="outline" className="h-auto flex-col gap-2 p-4">
            <Link href={href}>
                <Icon className="h-5 w-5" />
                <span className="text-sm">{title}</span>
            </Link>
        </Button>
    );
};