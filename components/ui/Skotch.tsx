import { memo } from 'react';

interface Props {
  color?: string;
}
function Skotch({ color }: Props) {
  return (
    <svg
      width="59"
      height="38"
      viewBox="0 0 59 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="31.5"
        width="63"
        height="7.30418"
        transform="rotate(-30 0 31.5)"
        fill={color}
        className="transition duration-300"
      />
    </svg>
  );
}
export default memo(Skotch);
