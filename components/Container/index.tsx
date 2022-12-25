import React, { memo } from 'react'

type Props = {
    children: JSX.Element;
    className?: string;
}

function Container({children, className} : Props) {
  return (
    <section className={`mx-auto px-6 max-w-container ${className || ''}`}>{children}</section>
  )
}

export default memo(Container);
