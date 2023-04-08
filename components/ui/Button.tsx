import { memo } from 'react';

type Props = {
  children: string;
  basic?: boolean;
  secondary?: boolean;
  small?: boolean;
  className?: string;
};

function Button({
  basic, secondary, children, small, className,
}: Props) {
  return (
    <button
      className={`${className || ''} ${
        basic
          ? 'bg-black text-white hover:bg-white hover:text-black border-white border-[0.5px] hover:border-black'
          : null
      } ${
        secondary
          ? 'bg-white text-black hover:bg-black hover:text-white border-black border-[0.5px]'
          : null
      } 
      ${small ? 'px-1 py-1 md:px-2 md:py-0.5 text-[11px]' : 'px-3 py-2 md:px-4 md:py-2'}
      transition duration-300 rounded-basic`}
      type="button"
    >
      {children}
    </button>
  );
}
export default memo(Button);
