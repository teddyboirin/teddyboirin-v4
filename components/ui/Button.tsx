import { memo } from 'react';

type Props = {
    children: string;
    basic?: boolean;
    secondary?: boolean;
}

let classNames: string[] = [];

function Button({ basic, secondary, children }: Props) {

    if (basic) {
        classNames.push('bg-black text-white hover:bg-white hover:text-black border border-black border-[0.5px] hover:border-black')
    }
    if (secondary) {
        classNames.push('bg-white text-black hover:bg-black hover:text-white border border-black border-[0.5px]')
    }
  return (
    <button
      className={`${classNames.join(' ')} transition duration-300 px-4 py-2 rounded-basic mt-3`}
      type="button"
    >
      Me contacter
    </button>
  );
}
export default (Button);
