import { memo } from 'react';

import Head from 'next/head';

type Props = {
    children: string;
}

function HeadUtils({children}: Props) {
  return (
    <Head>
      <title>teddy boirin | {children}</title>
    </Head>
  );
}

export default (HeadUtils);
