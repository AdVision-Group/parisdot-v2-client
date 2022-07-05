// Utils
import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import SubAccordion from "../sub-accordion/sub-accordion.component"

// Icons
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi"

interface IProps {
	showContent: boolean
	idx: number
	dayID: string
	item: {
		id: string
		title: string
		items: {
			id: string
			time: string
			title: string
			description: string
		}[]
		showContent: boolean
	}
	openEventDayProgram: (showContent: boolean, idx: number) => void
}

interface IAccordionContainerProps {
	isActive: boolean
}

const Accordion: React.FC<IProps> = ({
	item,
	showContent,
	openEventDayProgram,
	idx,
}) => {
	return (
		<AccordionContainer
			initial={{
				x: -200,
				opacity: 0,
			}}
			whileInView={{
				x: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.8,
				delay: +`0.${idx}`,
			}}
			viewport={{ once: true }}
			isActive={showContent}
		>
			<AccordionHeading
				isActive={showContent}
				onClick={() => openEventDayProgram(!showContent, idx)}
			>
				<h2>{item.title}</h2>
				<figure>
					{showContent ? <FiArrowDownCircle /> : <FiArrowUpCircle />}
				</figure>
			</AccordionHeading>
			<AnimatePresence>
				{showContent && (
					<ContentContainer
						id={item.id}
						key={item.id}
						initial="collapsed"
						animate={showContent ? "open" : "collapsed"}
						exit={"collapsed"}
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: {
								opacity: 1,
								height: 0,
							},
						}}
						transition={{
							duration: 1,
							ease: "linear",
						}}
					>
						{item.items.map((i, idx) => (
							<SubAccordion item={i} id={idx} key={idx} />
						))}
					</ContentContainer>
				)}
			</AnimatePresence>
		</AccordionContainer>
	)
}

export default Accordion

const AccordionContainer = styled(motion.div)<IAccordionContainerProps>`
	margin-bottom: 3rem;
`

const AccordionHeading = styled(motion.div)<IAccordionContainerProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 1.5rem;
	cursor: pointer;
	border-radius: 999rem;
	border: 3px solid
		${({ theme, isActive }) =>
			isActive
				? theme.colors.activeAccordionBorderColor
				: theme.colors.accordionBorderColor};

	h2 {
		font-size: 1.8rem;
		font-weight: 1000;
		text-transform: uppercase;
	}

	figure {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		padding: 0.6rem;
		border-radius: 50%;
		background-color: ${({ theme, isActive }) =>
			isActive
				? theme.colors.activeAccordionIconBackgroundColor
				: theme.colors.accordionIconBackgroundColor};
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 1.2rem 3rem;

		h2 {
			font-size: 2.2rem;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			h2 {
				font-size: 2.9rem;
			}
		}
	}
`

const ContentContainer = styled(motion.div)`
	color: ${({ theme }) => theme.fonts.primary};
	overflow: hidden;
`
