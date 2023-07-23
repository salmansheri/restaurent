import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }: { params: { category: string } }) => {
	return {
		title: params.category
	};
};
