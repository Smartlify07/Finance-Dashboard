import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
  value?: string;
  onClick?: () => void;
  background?: string;
  className?: string;
  width?: string;
  style?: CSSProperties;
  children?: ReactNode;
  reverseOrder?: boolean;
}

const Button = ({
  value,
  onClick,
  background,
  width,
  className,
  children,
  style,
  reverseOrder,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ ...style, width: width, background: background }}
      className={className}
    >
      {!reverseOrder ? (
        <>
          {value}
          {children}
        </>
      ) : (
        <>
          {children}
          {value}
        </>
      )}
    </button>
  );
};

export default Button;
