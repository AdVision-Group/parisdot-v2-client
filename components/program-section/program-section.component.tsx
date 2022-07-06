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
					title: "Registration",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-2",
					time: "14:00 - 14:20",
					title: "Opening the conference Hello from the organizers",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-3",
					time: "14:30 - 15:00",
					title: "Keynote 1",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-4",
					time: "15:05 - 15:45",
					title: "Panel 1",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-5",
					time: "15:50 - 16:30",
					title: "Panel 2",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-6",
					time: "16:35 - 17:05",
					title: "Keynote 2",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-7",
					time: "17:10 - 17:30",
					title: "Presentation 1",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
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
					title: "Coffee, mingling",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-2",
					time: "11:00 - 11:30",
					title: "Presentation 2",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-3",
					time: "11:30 - 12:00",
					title: "Keynote 3",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-4",
					time: "12:00 - 12:30",
					title: "Presentation 3",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-5",
					time: "12:30 - 14:30",
					title: "lunch Break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-6",
					time: "14:30 - 15:00",
					title: "Presentation 4",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-7",
					time: "15:00 - 16:15",
					title: "Panel 3 plus QA",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-8",
					time: "16:15 - 16:45",
					title: "Coffee break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-9",
					time: "16:45 - 17:15",
					title: "Keynote 4",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-10",
					time: "17:15 - 17:45",
					title: "Presentation 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
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
					title: "Coffee, mingling",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-2",
					time: "11:00 - 11:30",
					title: "Presentation 6",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-3",
					time: "11:30 - 12:00",
					title: "Keynote 5",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-4",
					time: "12:00 - 12:30",
					title: "Presentation 7",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-5",
					time: "12:30 - 13:00",
					title: "Keynote 6",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-6",
					time: "13:00 - 14:30",
					title: "Lunch break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-7",
					time: "14:30 - 15:00",
					title: "Presentation 8",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-8",
					time: "15:00 - 16:15",
					title: "Panel 4 plus QA",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-9",
					time: "16:15 - 16:45",
					title: "Coffee break",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-10",
					time: "16:45 - 17:15",
					title: "Keynote 7",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-11",
					time: "17:15 - 17:45",
					title: "Presentation 9",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-12",
					time: "17:45 - 18:15",
					title: "Keynote 8",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-13",
					time: "18:15 - 18:30",
					title: "Thank you from the Organisers",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
				{
					id: "item-14",
					time: "18:30 - 19:30",
					title: "After conference drinks",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
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
					src={"/assets/program-section/conference.png"}
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
	max-width: 50rem;
	margin: 0 auto 5rem;
`
