import React from "react";
import classnames from "classnames";

interface BaseButtonProps {
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
type NativeButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, "type">;
type AnchorButtonProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, "type">;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size,
    type,
    children,
    className,
    disabled,
    href,
    danger,
    success,
    warning,
    ...restProps
  } = props;
  const classes = classnames("btn", className, {
    [`btn-${type}`]: type,
    [`btn-danger`]: !!danger,
    [`btn-success`]: !!success,
    [`btn-warning`]: !!warning,
    [`btn-${size}`]: size,
    disabled: type === "link" && disabled,
  });
  if (type === "link" && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else if (type === "text") {
    return (
      <span className={classes} {...restProps}>
        {children}
      </span>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  type: "default",
};
export default Button;
