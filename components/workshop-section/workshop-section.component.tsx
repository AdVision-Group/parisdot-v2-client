// Utils
import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
import Accordion from "../accordion/accordion.component"

const WorkshopSection: React.FC = () => {
	const [program, setProgram] = useState([
		{
			id: "day-1",
			title: "Workshop  20.07",
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "11:00 - 17:00",
					title: "Workshop",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
			],
		},
		{
			id: "day-2",
			title: "Workshop 21.07",
			showContent: false,
			items: [
				{
					id: "item-1",
					time: "11:00 - 17:00",
					title: "Workshop",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum felis euismod velit dignissim luctus. Aliquam vehicula ligula eu risus gravida tincidunt. In vitae tellus a sem sollicitudin ullamcorper in non quam. Integer maximus, ante non posuere congue, neque est congue sapien, tincidunt lacinia dui mi id leo.",
				},
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
		<SectionContainer id="program">
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
					src={"/assets/workshop-section/Workshop.png"}
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

export default WorkshopSection

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
