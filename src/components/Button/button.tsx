import React from "react";
import classnames from "classnames";

interface BaseButtonProps {
  size?: "lg" | "sm";
  btnType?:
    | "primary"
    | "default"
    | "danger"
    | "success"
    | "link"
    | "warning"
    | "text";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { size, btnType, children, className, disabled, href, ...restProps } =
    props;
  const classes = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  } else if (btnType === "text") {
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
  btnType: "default",
};
export default Button;
