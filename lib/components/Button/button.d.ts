import React from "react";
export interface BaseButtonProps {
    size?: "lg" | "sm";
    type?: "primary" | "default" | "link" | "text";
    danger: boolean;
    success: boolean;
    warning: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, "type">;
type AnchorButtonProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, "type">;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
