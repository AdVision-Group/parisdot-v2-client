// Utils
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import Accordion from "../accordion/accordion.component"

const ProgramSection: React.FC = () => {
	const [program, setProgram] = useState([
		{
			id: "day-1",
			title: "Program for 19.07",
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "12:00 - 14:00",
					title: "Registration - pillar room",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-2",
					time: "14:00 - 14:15",
					title: "Opening the conference Hello from the organizers",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-3",
					time: "14:15 - 14:45",
					title: "Blockchains that evolve with your business",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Gautam Dhameja",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "Gautam Dhameja",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-4",
					time: "14:45 - 15:15",
					title: "Mojo over Ego: decentralizing leadership",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Lisa Wocken",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-5",
					time: "15:15 - 15:45",
					title: "What does it mean to be decentralized?",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Hoon Kim",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},

				{
					id: "item-6",
					time: "15:45 - 16:15",
					title: "Break - pillar room",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-7",
					time: "16:15 - 16:40",
					title: "Intro to Phala World - Gamifying the Meta-Soul",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Zoe Meckbach",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-8",
					time: "16:40 - 17:05",
					title: "Moonbeam and interoperability",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Alberto",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-9",
					time: "17:05 - 17:30",
					title:
						"Restricted delivery of the NFT underlying asset to the NFT owner: a revolutionary capability for a safe digital ownership",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Elie Auvray",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-10",
					time: "17:30 - 17:55",
					title: "A Unified Platform For Polkadot’s Technology Stack",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Matjaz Sobocan",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-11",
					time: "17:55 - 18:20",
					title: "Radically open Bitcoin for parachains",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Alberto",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-8",
					time: "18:00 - 19:00",
					title: "Closing",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "Alberto",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
			],
		},
		{
			id: "day-2",
			title: "Program for 20.07",
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "10:30 - 11:00",
					title: "Coffee, mingling - pillar room",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-2",
					time: "11:00 - 11:25",
					title: "On-chain privacy in Polkadot and web3",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "auditorium - Kenny Li",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-3",
					time: "11:25 - 11:55",
					title: "Importance of light client for decentralization",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Radha Dasari",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-4",
					time: "11:55 - 12:20",
					title:
						"Composable’s Cross-chain Virtual Machine (XCVM) is the primary piece of technology that will finally allow for true composability across multiple ecosystems within DeFi, facilitated by its natively cross-chain smart contracts.",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "0xbrainjar",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-5",
					time: "12:20 - 12:45",
					title: "Real DeFi with real use cases.",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "LucasVo",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-6",
					time: "12:45 - 13:10",
					title:
						"sTAL, the smart coin for smart people : a new kind of trustable stablecoin for the Polkadot ecosystem and beyond",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Alain Parize",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-7",
					time: "13:10 - 14:30",
					title: "lunch Break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-8",
					time: "14:30 - 14:55",
					title: "The problems with metaverses today and how to solve them",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Bruno Skvorc",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-9",
					time: "14:55 - 16:00",
					title: "Why is it important to rely on independent validators?",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-10",
					time: "16:00 - 16:30",
					title: "Coffee break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-11",
					time: "16:30 - 17:00",
					title: "Crypto regulation, current issues and possible solutions",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Adam Berker",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-12",
					time: "17:00 - 17:25",
					title:
						"The Kusamaverse: how it came into existence, how it is going and our hopes for the future of it",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Nic Rutherford",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-13",
					time: "17:25 - 17:50",
					title: "Polkadot Alliance, what is it?",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Toma Sadova",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-14",
					time: "17:50 - 18:15",
					title:
						"Smart contracts auditing, pen testing, bug bounties… how it is crucial in today's market",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Yev",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-10",
					time: "18:30 - 19:00",
					title: "Closing",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				// {
				// 	id: "item-11",
				// 	time: "11:00 - 17:00",
				// 	title: "Workshop",
				// 	description:
				// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				// },
			],
		},
		{
			id: "day-3",
			title: "Program for 21.07",
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "10:30 - 11:00",
					title: "Coffee, mingling - pillar room",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-2",
					time: "11:00 - 11:25",
					title: "The State of music NFTs in Dotsama",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Antoine Estienne",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-3",
					time: "11:25 - 11:55",
					title: "A native jurisdiction built for Web3",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Alessandro Palombo",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-4",
					time: "11:55 - 12:20",
					title: "Subsquid, indexing for the Web3's mass adoption",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Massimo",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-5",
					time: "12:20 - 13:05",
					title: "The importance of developing the Polkadot community",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Zoé Meckbach",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-6",
					time: "13:05 - 13:30",
					title: "TBC",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-7",
					time: "13:30 - 14:30",
					title: "Lunch break (outside)",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-8",
					time: "14:30 - 14:55",
					title:
						"Unified liquidity standard for staking and crowdloan derivatives",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Terry",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-9",
					time: "14:55 - 16:00",
					title: "Scaling Polkadot education",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Radha Dasari",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-10",
					time: "16:00 - 16:30",
					title: "Coffee break - pillar room",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				{
					id: "item-11",
					time: "16:30 - 17:00",
					title: "Carbon credits d ecoded",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Gilad Goren",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-12",
					time: "17:00 - 17:25",
					title: "Standardizing cross-chain communication",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "Jacob Kowalewski",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-13",
					time: "17:25 - 17:50",
					title: "TBC",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					speaker: {
						name: "HydraDX",
						image: {
							src: "/assets/program-section/speaker-placeholder.png",
							alt: "speaker placeholder",
						},
						logo: {
							src: "/assets/program-section/partner-placeholder.png",
							alt: "partner placeholder",
						},
					},
				},
				{
					id: "item-14",
					time: "18:15 - 18:30",
					title: "Thank you from the organizers",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
					// speaker: {
					// 	name: "John Doe",
					// 	image: {
					// 		src: "/assets/program-section/speaker-placeholder.png",
					// 		alt: "speaker placeholder",
					// 	},
					// 	logo: {
					// 		src: "/assets/program-section/partner-placeholder.png",
					// 		alt: "partner placeholder",
					// 	},
					// },
				},
				// {
				// 	id: "item-15",
				// 	time: "11:00 - 17:00",
				// 	title: "Workshop",
				// 	description:
				// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				// },
			],
		},
	])

	const openEventDayProgram = (
		showContent: boolean,
		i: number
		// dayID: string
	) => {
		setProgram([
			...program.map((e, id) => {
				if (i === id) {
					return {
						...e,
						showContent: showContent,
					}
				} else {
					return {
						...e,
						showContent: e.showContent,
					}
				}
			}),
		])
	}

	// console.log(program)

	return (
		<SectionContainer id="conference">
			<TitleFigure
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
				}}
				transition={{
					duration: 0.6,
					// delay: 0.5,
				}}
				viewport={{ once: true }}
			>
				<Image
					src={"/assets/program-section/conference-v2.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
					// height={20}
				/>
			</TitleFigure>

			<div>
				{program.map((day, idx) => (
					<Accordion
						showContent={program[idx].showContent}
						openEventDayProgram={openEventDayProgram}
						key={idx}
						idx={idx}
						item={day}
						dayID={day.id}
					/>
				))}
			</div>
		</SectionContainer>
	)
}

export default ProgramSection

const SectionContainer = styled.section`
	scroll-margin-top: 10rem;
	max-width: 117rem;
	margin: 5rem auto 10rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* padding: 0 1rem; */
			margin: 10rem auto 15rem;
		}
	}
`
const TitleFigure = styled(motion.figure)`
	position: relative;
	max-width: 52rem;
	margin: 0 auto 5rem;
`
