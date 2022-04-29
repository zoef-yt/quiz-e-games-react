import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: 'Category01',
		categoryName: 'Sandbox',
		images: [
			'https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2020/4/28/bjoyslzjb3uxqyg82uz2/minecraft',
			'https://www.pcgamesn.com/wp-content/uploads/2016/04/Minecraft-console-commands-PCGamesN.jpg',
			'https://cdn.mos.cms.futurecdn.net/HMrXoPjJa8vrnzEf5W6dV4.jpg',
		],
	},
	{
		_id: 'Category02',
		categoryName: 'Shooters',
		images: [
			'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt86b2df9efefb427c/625dedd2fd9afd4b1fe2fcf8/Ep4_act3_Gameplay_Reveal_banner.jpg?auto=webp&disable=upscale&height=504',
			'https://www.theneweconomy.com/wp-content/uploads/2018/10/Fortnite.jpg',
			'https://cdn.mos.cms.futurecdn.net/i3s7bFu2y7EjthZS8GFca7-1200-80.jpg',
		],
	},
	{
		_id: 'Category03',
		categoryName: 'Action-adventure',
		images: [
			'https://cdn.wccftech.com/wp-content/uploads/2020/04/WCCFthelastofuspart225.jpg',
			'https://www.denofgeek.com/wp-content/uploads/2020/06/The-Last-of-Us-Part-2-1.jpg?fit=1280%2C720',
			'https://assets1.ignimgs.com/vid/thumbnails/user/2014/03/26/lastofusreviewmimig.jpg',
		],
	},
];
