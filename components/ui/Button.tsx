import { memo } from 'react';

type Props = {
  children: string;
  basic?: boolean;
  secondary?: boolean;
};

function Button({ basic, secondary, children }: Props) {
  return (
    <button
      className={`${
        basic
          ? 'bg-black text-white hover:bg-white hover:text-black border-white border-[0.5px] hover:border-black'
          : null
      } ${
        secondary
          ? 'bg-white text-black hover:bg-black hover:text-white border-black border-[0.5px]'
          : null
      } transition duration-300 px-3 py-2 md:px-4 md:py-2 rounded-basic mt-3`}
      type="button"
    >
      {children}
    </button>
  );
}
export default memo(Button);
