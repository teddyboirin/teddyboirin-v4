import React, { memo } from 'react';

interface Props {
    children: string;
}

function Badge({ children }: Props) {
  return (
    <div className="bg-black text-white px-1 py-0.5 rounded-basic w-fit text-11 border border-scotch">{children}</div>

  );
}
export default memo(Badge);
