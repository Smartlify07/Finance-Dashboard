import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import Button, { ButtonProps } from './button';

export interface CardProps extends PropsWithChildren {
  background?: string;
  className?: string;
  title?: string;
  body?: string;
  text?: string;
}
const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(`rounded-[1.8rem] py-[1.4rem] px-[1.4rem] ${className}`)}
    >
      {children}
    </div>
  );
};

Card.Title = ({ className, title }: CardProps) => {
  return <h1 className={className}>{title}</h1>;
};
Card.Text = ({ className, text }: CardProps) => {
  return <p className={className}>{text}</p>;
};

Card.Body = ({ className, body, children }: CardProps) => {
  return (
    <div className={className}>
      {body}
      {children}
    </div>
  );
};

Card.Button = ({
  className,
  value,
  onClick,
  children,
  reverseOrder,
}: ButtonProps) => {
  return (
    <Button
      reverseOrder={reverseOrder}
      value={value}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Card;
