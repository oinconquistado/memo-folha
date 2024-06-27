import { type ReactNode, cloneElement, isValidElement } from 'react';
import type { SVGProps } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  children: ReactNode;
}

const SVGIcon = ({ children, ...props }: SvgIconProps) => {
  const validChildren = isValidElement(children) ? children : null;

  return (
    <>
      {validChildren &&
        cloneElement(validChildren, {
          ...props,
        })}
    </>
  );
};

export default SVGIcon;
