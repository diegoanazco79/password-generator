import React from 'react';
import type { Metadata } from 'next';
import { Share_Tech_Mono } from 'next/font/google';

import './globals.css';

const shareTechMono = Share_Tech_Mono( { weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Password Generator',
  description: 'Generate a password with a custom properties.'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={shareTechMono.className}>{children}</body>
    </html>
  );
}
