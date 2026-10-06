import { ElementType } from "react";

export interface StateCardProps{
title: string;
value: string;
change: string;
positive: boolean;
icon: ElementType;
iconClr: string;
iconBg: string;
} 


export interface SettingRowProps {
    label: string;
    description?: string;
    children?: React.ReactNode;
}

