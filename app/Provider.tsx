'use client';
import Loader from '@/components/Loader';
import { getClerkUsers } from '@/lib/actions/users.actions';
import {
	LiveblocksProvider,
	RoomProvider,
	ClientSideSuspense,
} from '@liveblocks/react/suspense';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
	return (
		<LiveblocksProvider
			authEndpoint={'/api/liveblocks-auth'}
			resolveUsers={async ({ userIds }) => {
				const users = await getClerkUsers({ userIds });

				return users;
			}}
			// publicApiKey={
			// 	'pk_dev_bieqMcWsbTya_b50J_6f0DoHSzcTV2a7CRROHG5ZIFNi5nK9WyBjVu7l01_PVn-b'
			// }
		>
			<ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
		</LiveblocksProvider>
	);
};

export default Provider;
