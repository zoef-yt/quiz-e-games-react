import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
	{
		_id: uuid(),
		title: 'Minecraft',
		totalScore: 20,
		src: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
		mcqs: [],
		categoryName: 'Sandbox',
	},
	{
		_id: uuid(),
		title: 'Scrap Mechanic',
		totalScore: 10,
		src: 'https://cdn.akamai.steamstatic.com/steam/apps/387990/capsule_616x353.jpg?t=1593703247',
		mcqs: [],
		categoryName: 'Sandbox',
	},
	{
		_id: uuid(),
		title: 'Valorant',
		totalScore: 20,
		src: 'https://i2.wp.com/playerassist.com/wp-content/uploads/2020/11/valorant-wiki-guide.jpg?fit=762%2C397&ssl=1',
		mcqs: [],
		categoryName: 'Shooters',
	},
	{
		_id: uuid(),
		title: 'Fortnite',
		totalScore: 10,
		src: 'https://cdn.vox-cdn.com/thumbor/im1FxWHJEH8jeKsqAeFqb42iLXc=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67305181/Fortnite_C2S4_BPLineup.0.jpg',
		mcqs: [],
		categoryName: 'Shooters',
	},
	{
		_id: uuid(),
		title: 'Last of us 1 & 2',
		totalScore: 20,
		src: 'https://images-na.ssl-images-amazon.com/images/I/91yiVwuQ2cL.jpg',
		mcqs: [],
		categoryName: 'Action-adventure',
	},
	{
		_id: uuid(),
		title: 'Horizon Forbidden West',
		totalScore: 10,
		src: 'https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg',
		mcqs: [],
		categoryName: 'Action-adventure',
	},
];
