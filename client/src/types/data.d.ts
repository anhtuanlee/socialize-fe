import { ReactNode } from "react";

declare global {
    type TButton = {
        onClick?: () => void;
        type?: "rounded" | "primary" | "secondary" | "select" | "border" | "icon" | "icon-border";
        href?: string;
        classname?: string;
        title?: string;
        Icon?: any;
        children?: ReactNode;
    };
    type TPropsDataButton = {
        href?: string;
        onClick?: () => void;
    };
    type TSidebarItem = {
        href: string;
        icon: any;
        title: string;
    };
}
