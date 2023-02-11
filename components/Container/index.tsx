import React, { memo } from 'react'

type Props = {
    children: JSX.Element;
    className?: string;
}

function Container({children, className} : Props) {
  return (
    <section className={`mx-auto p-4 md:p-6 max-w-container ${className || ''}`}>{children}</section>
  )
}

export default memo(Container);
