import { SidebarMenuButton, SidebarMenuItem } from "@workspace/ui/components/sidebar";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarItem {
    title: string;
    url: string;
    icon: React.ElementType;
    enabled: boolean;
}

export interface SidebarMenuItemProps {
    items: SidebarItem[];
}

export default function ItemMenuSidebar({
    items
}: SidebarMenuItemProps) {
    const pathname = usePathname();

    const isActive = (url: string) => {
        if (url === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(url);
    };

    return (
        <>
            {items?.map((item) => {
                return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            tooltip={item.title}
                            disabled={!item.enabled}
                            className={cn(
                                isActive(item.url),
                                !item.enabled && "opacity-50 cursor-not-allowed"
                            )}>
                            <Link
                                href={item.enabled ? item.url : "#"}
                                onClick={(e) => !item.enabled && e.preventDefault()}
                                className={cn(!item.enabled && "pointer-events-none")}
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.title}</span>
                                {!item.enabled && (
                                    <span className="ml-auto text-xs bg-gray-500 text-white px-1 rounded">Soon</span>
                                )}
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                );
            })}
        </>
    );
};