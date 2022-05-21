import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
	{
		_id: 'a81bf6f5-f444-402b-9b58-6d16835e7de7',
		title: 'Minecraft',
		src: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
		mcqs: [
			{
				_id: uuid(),
				question: 'When was Minecraft released',
				options: ['18 November 2011', '18 November 2012', '1 November 2021', '18 November 2022'],
				answer: '18 November 2011',
			},
			{
				_id: uuid(),
				question: 'How do you make a large chest?',
				options: [
					'Put 2 chests next to each other',
					'You have to buy them',
					'You have to find a giant chest and then make it smaller',
					'Put 3 chests next to each other',
				],
				answer: 'Put 2 chests next to each other',
			},
			{
				_id: uuid(),
				question: 'What are Creepers scared of?',
				options: ['Spiders', 'Cows', 'Ocelots', 'The dark'],
				answer: 'Ocelots',
			},
			{
				_id: uuid(),
				question: 'How is a Charged Creeper created?',
				options: [
					'When a creeper eats a plate of rocks',
					'When a creeper collects a battery',
					'When lightning strikes within four blocks of a creeper',
					"Even the game's creators can't explain",
				],
				answer: 'When lightning strikes within four blocks of a creeper',
			},
		],
		categoryName: 'Sandbox',
	},
	{
		_id: uuid(),
		title: 'Valorant',
		totalScore: 20,
		src: 'https://i2.wp.com/playerassist.com/wp-content/uploads/2020/11/valorant-wiki-guide.jpg?fit=762%2C397&ssl=1',
		mcqs: [
			{
				_id: uuid(),
				question: 'When was valorant released?',
				options: ['2 June 2023', '2 June 2022', '2 June 2018', '2 June 2020'],
				answer: '2 June 2020',
			},
			{
				_id: uuid(),
				question: 'Who is Sabine?',
				options: ['Viper', 'Raze', 'Sage', 'Killjoy'],
				answer: 'Viper',
			},
			{
				_id: uuid(),
				question: 'How many flashes skye has?',
				options: ['2', '3', '0', '15'],
				answer: '2',
			},
			{
				_id: uuid(),
				question: 'What does 1hp mean when your friend dies',
				options: ['Enemy is really 1hp', 'Enemy is still at full health', 'Your friend is an imposter', '1 High-Point'],
				answer: 'Enemy is still at full health',
			},
			{
				_id: uuid(),
				question: "What's the max credit you can have",
				options: ['90000', '22000', '250', '9000'],
				answer: '9000',
			},
		],
		categoryName: 'Shooters',
	},
	{
		_id: uuid(),
		title: 'Fortnite',
		totalScore: 10,
		src: 'https://cdn.vox-cdn.com/thumbor/im1FxWHJEH8jeKsqAeFqb42iLXc=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67305181/Fortnite_C2S4_BPLineup.0.jpg',
		mcqs: [
			{
				_id: uuid(),
				question: 'Fortnite release date',
				options: ['21 July 2017', '21 July 2027', '21 July 2011', '21 July 2021'],
				answer: '21 July 2017',
			},
			{
				_id: uuid(),
				question: 'Name of the character shaped like a banana',
				options: ['Banana', 'Peely', 'Mango', 'Player'],
				answer: 'Peely',
			},
			{
				_id: uuid(),
				question: "What's the price of fortnite",
				options: ['Free to play', '$20', '$15', '$1'],
				answer: 'Free to play',
			},
		],
		categoryName: 'Shooters',
	},
	{
		_id: uuid(),
		title: 'Last of us 1 & 2',
		totalScore: 20,
		src: 'https://images-na.ssl-images-amazon.com/images/I/91yiVwuQ2cL.jpg',
		mcqs: [
			{
				_id: uuid(),
				question: "What was joel's daughter",
				options: ['Sarah', 'Marah', 'Ellie', 'Boy'],
				answer: 'Sarah',
			},
			{
				_id: uuid(),
				question: "Which studio developed of 'Last of us'",
				options: ['Naughty Dog', 'Marvel', 'Epic Games', 'Steam'],
				answer: 'Naughty Dog',
			},
			{
				_id: uuid(),
				question: 'Last of us release date',
				options: ['14 June 2016', '14 June 2019', '14 June 2006', '14 June 2013'],
				answer: '14 June 2013',
			},
		],
		categoryName: 'Action-adventure',
	},
	{
		_id: uuid(),
		title: 'Horizon Forbidden West',
		totalScore: 10,
		src: 'https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg',
		mcqs: [
			{
				_id: uuid(),
				question: 'What is the name of protagonist of horizon forbidden west',
				options: ['Alex', 'Amber', 'Aloy', 'Ani'],
				answer: 'Aloy',
			},
			{
				_id: uuid(),
				question: 'Horizon forbidden west release date',
				options: ['18 February 2001', '18 February 2022', '18 February 2024', '2 February 2022'],
				answer: '18 February 2022',
			},
			{
				_id: uuid(),
				question: "Aloy's father name",
				options: ['Bost', 'Roast', 'Rost', 'Rose'],
				answer: 'Rost',
			},
			{
				_id: uuid(),
				question: 'Who is Aloy clone of?',
				options: ['Elisabet Sobeck', 'Elisabet Zobeck', 'Elisabet Nobeck', 'Elisabet hobeck'],
				answer: 'Elisabet Sobeck',
			},
		],
		categoryName: 'Action-adventure',
	},
];
