// Utils
import React from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
import Image from "../image/image.component"

// Hooks
import { useBoolean } from "usehooks-ts"

// Icons
import { FiArrowRightCircle, FiArrowUpCircle } from "react-icons/fi"

interface IProps {
	id: string | number
	item: {
		id: string
		time: string
		title: string
		description: string
		speaker?: {
			name: string
			image: {
				src: string
				alt: string
			}
			logo: {
				src: string
				alt: string
			}
		}
	}
}

interface IAccordionContainerProps {
	isActive: boolean
}

const SubAccordion: React.FC<IProps> = ({ item }) => {
	const { value: showContent, toggle } = useBoolean(false)

	return (
		<AccordionContainer>
			<AccordionHeading onClick={toggle}>
				<TimeContainer>
					<p>{item.time}</p>
				</TimeContainer>
				<Circle isActive={showContent} />
				<ContentContainer isActive={showContent}>
					<FlexContainer isActive={showContent}>
						<h3>{item.title}</h3>
						{item.speaker && <Border />}
						{item.speaker && (
							<SpeakerContainer isActive={showContent}>
								<figure className="speaker">
									<Image
										src={item.speaker.image.src}
										alt={item.speaker.image.alt}
										effect="blur"
										style={{
											objectFit: "contain",
										}}
										// width={"100%"}
									/>
								</figure>
								<div>
									<figure className="speaker-logo">
										<Image
											src={item.speaker.logo.src}
											alt={item.speaker.logo.alt}
											effect="blur"
											style={{
												objectFit: "contain",
											}}
											// width={"100%"}
											// height={"5rem"}
										/>
									</figure>
									<h4>{item.speaker.name}</h4>
								</div>
								<figure className="icon">
									{showContent ? <FiArrowUpCircle /> : <FiArrowRightCircle />}
								</figure>
							</SpeakerContainer>
						)}
					</FlexContainer>
					<AnimatePresence>
						{showContent && (
							<Content
								id={item.id.toString()}
								key={item.id}
								initial="collapsed"
								animate={showContent ? "open" : "collapsed"}
								exit={"collapsed"}
								variants={{
									open: {
										display: "block",
										opacity: 1,
										// height: width <= 858 ? "64rem" : "28rem",
										height: "auto",
									},
									collapsed: {
										opacity: 1,
										height: 0,
										transitionEnd: { opacity: 1 },
									},
								}}
								transition={{ duration: 0.8, ease: [0.04, 0.2, 0.23, 0.98] }}
							>
								<p>{item.description}</p>
							</Content>
						)}
					</AnimatePresence>
				</ContentContainer>
			</AccordionHeading>
		</AccordionContainer>
	)
}

export default SubAccordion

const TimeContainer = styled.div`
	padding-top: 1.5rem;
	font-size: 2rem;
	font-weight: 1000;
	margin-left: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Circle = styled.div<IAccordionContainerProps>`
	display: none;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			display: flex;
			margin-top: 1.5rem;
			align-items: center;
			justify-content: center;
			width: 3.1rem;
			height: 3.1rem;
			background-color: ${({ theme, isActive }) =>
				isActive
					? theme.colors.activeAccordionIconBackgroundColor
					: theme.colors.accordionIconBackgroundColor};
			border-radius: 50%;
		}
	}
`

const AccordionHeading = styled(motion.div)`
	position: relative;
	display: grid;
	/* align-items: center; */
	grid-template-columns: auto;
	max-width: 100rem;
	margin: 0 auto;
	padding: 1rem 0;
	gap: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 1rem 1rem;
			grid-template-columns: auto auto 1fr;
		}
	}
`

const AccordionContainer = styled(motion.div)`
	&:first-child {
		margin-top: 2rem;
	}
	&:last-child {
		margin-bottom: 4rem;
	}

	&:not(:last-child) {
		${AccordionHeading} {
			margin-bottom: 2rem;

			${Circle} {
				&:before {
					content: "";
					z-index: -1;
					position: absolute;
					top: 4rem;
					bottom: -5rem;
					left: 22.9=rem;
					/* height: 100%; */
					width: 1px;
					background-color: ${({ theme }) =>
						theme.colors.accordionIconBackgroundColor};
				}
			}
		}
	}
`

const ContentContainer = styled(motion.div)<IAccordionContainerProps>`
	cursor: pointer;
	flex-grow: 1;
	padding: 1.2rem 2rem 1rem;
	border: 2px solid
		${({ theme, isActive }) =>
			isActive
				? theme.colors.activeAccordionBorderColor
				: theme.colors.accordionIconBackgroundColor};
	border-radius: ${({ isActive }) => (isActive ? "3rem" : "3rem")};
	max-width: 76rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 1.3rem 2.5rem 1rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const FlexContainer = styled.div<IAccordionContainerProps>`
	display: flex;
	align-items: start;
	justify-content: start;
	flex-direction: column;

	h3 {
		font-size: 1.6rem;
		font-weight: 1000;
		text-transform: uppercase;
	}

	/* figure {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.2rem;
		padding: 0.6rem;
		border-radius: 50%;

		background-color: ${({ theme, isActive }) =>
		isActive
			? theme.colors.activeAccordionIconBackgroundColor
			: theme.colors.accordionIconBackgroundColor};
	} */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		h3 {
			font-size: 2rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			align-items: center;
			justify-content: space-between;
			flex-direction: row;
			h3 {
				margin-right: 1rem;
			}
		}
	}
`

const Content = styled(motion.div)`
	overflow: hidden;
	p {
		margin: 1rem 0 2rem;
		padding-top: 1rem;
		border-top: 1px solid
			${({ theme }) => theme.colors.accordionIconBackgroundColor};
	}
`

const Border = styled.div`
	width: 100%;
	height: 1px;
	/* justify-self: end; */
	/* margin-left: auto; */
	margin: 1rem 0;
	background-color: #fff;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			width: 1px;
			height: 5rem;
			justify-self: end;
			margin-left: auto;
			margin-right: 3rem;
			background-color: ${({ theme }) =>
				theme.colors.accordionIconBackgroundColor};
		}
	}
`

const SpeakerContainer = styled.div<IAccordionContainerProps>`
	display: flex;
	align-items: center;
	width: 100%;
	/* max-width: 20rem; */
	gap: 1rem;
	/* border: 1px solid red; */

	h4 {
		font-size: 1.6rem;
		font-weight: 1000;
		text-transform: uppercase;
	}

	.speaker {
		/* margin-top: 1rem; */
		padding-top: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.speaker-logo {
		/* max-height: 3rem; */
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3.5rem;
		padding: 0.6rem;
		border-radius: 50%;

		background-color: ${({ theme, isActive }) =>
			isActive
				? theme.colors.activeAccordionIconBackgroundColor
				: theme.colors.accordionIconBackgroundColor};

		justify-self: end;
		margin-left: auto;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				display: none;
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 20rem;
		}
	}
`
