import { memo } from 'react';

type Props = {
  children: string;
  basic?: boolean;
  secondary?: boolean;
  small?: boolean;
  className?: string;
  onClick?: () => void;
};

function Button({
  basic, secondary, children, small, className, onClick,
}: Props) {
  return (
    <button
      className={`${className || ''}${
        basic
          ? 'bg-black text-white hover:bg-white hover:text-black border-white border-[0.5px] hover:border-black text-12 md:text-14'
          : ''
      }${
        secondary
          ? 'bg-white text-black hover:bg-black hover:text-white border-black border-[0.5px] text-12 md:text-14'
          : ''
      } 
      ${small ? 'px-1 py-0.5 md:px-2 md:py-0.5 !text-[11px]' : 'px-3 py-2 md:px-4 md:py-2'}
      transition duration-300 rounded-basic`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default memo(Button);
