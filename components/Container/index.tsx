import React, { memo } from 'react'

type Props = {
    children: JSX.Element;
    className?: string;
}

function Container({children, className} : Props) {
  return (
    <main className={`mx-auto p-4 md:p-6 max-w-container ${className || ''}`}>{children}</main>
  )
}

export default memo(Container);
