//  Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Title from "../title/title.component"
import Image from "../image/image.component"
import Paragraph from "../paragraph/paragraph.component"
import Button from "../button/button.component"

const AboutSection: React.FC = () => {
	return (
		<SectionContainer id="about">
			<Ilustration>
				<Image
					src={"/assets/ilustrations/right_middle-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
				/>
			</Ilustration>
			<Container>
				<IluFigure
					initial={{
						y: 200,
						opacity: 0,
					}}
					whileInView={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1,
					}}
					viewport={{ once: true }}
				>
					<Image
						src="/assets/about-section/ilu-v2.svg"
						alt="ilu"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
					/>
				</IluFigure>
				<Content
					initial={{
						x: 200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1,
						delay: 1,
					}}
					viewport={{ once: true }}
				>
					<Title>WHAT IS PARISDOT?</Title>
					<Paragraph>
						3 days of conference and workshops sessions organized by some of the
						leading projects of the Polkadot and Kusama ecosystems.
					</Paragraph>
					<Paragraph>
						Offering an inclusive space to meet, greet, talk and exchange
						thoughts, and perhaps kick off the next interesting collaboration.
						Targeting the wider crypto community.
					</Paragraph>

					<ButtonsContainer>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.eventbrite.com/e/parisdotcomm-tickets-372008245677"
						>
							<Button rounded>Buy tickets</Button>
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://xkmlgcptw4h.typeform.com/to/WgZTsjqB"
						>
							<Button outline rounded>
								Apply to speak
							</Button>
						</a>
					</ButtonsContainer>
				</Content>
			</Container>
		</SectionContainer>
	)
}

export default AboutSection

const Ilustration = styled.figure`
	position: absolute;
	right: 0;
	z-index: -1;
	width: 35%;
	height: auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
		display: none;
	}
`

const SectionContainer = styled.section`
	/* padding: 5rem 0; */
	padding: 10rem 1.5rem;
	max-width: 120rem;
	margin: 0 auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 15rem 0 10rem;
		}
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;

	gap: 3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 1.5rem;
			}
		}
	}
`

const IluFigure = styled(motion.figure)`
	position: relative;
	width: 50%;
	/* 
	max-width: 26rem; */
	justify-self: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: unset;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Content = styled(motion.div)`
	max-width: 65rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const ButtonsContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	gap: 2rem;
	margin-top: 4rem;

	a {
		width: 100%;
		display: block;
		button {
			width: 100%;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-direction: row;
		a {
			width: unset;
			display: block;
			button {
				width: initial;
			}
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`
