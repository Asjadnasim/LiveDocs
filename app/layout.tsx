import { Inter as FontSans } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import './globals.css';
import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import Head from 'next/head';
import Provider from './Provider';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'LiveDocs',
	description: 'Your go-to collaborative editor.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
				variables: { colorPrimary: '#3371FF', fontSize: '16px' },
			}}
		>
			<html lang='en' suppressHydrationWarning>
				<body
					className={cn(
						'min-h-screen font-sans antialiased',
						fontSans.variable
					)}
				>
					<Provider>{children}</Provider>
				</body>
			</html>
		</ClerkProvider>
	);
}
