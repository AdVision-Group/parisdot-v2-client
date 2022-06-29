//  Utils
import React from "react"
import styled from "styled-components"

// Components
import Title from "../title/title.component"
import Paragraph from "../paragraph/paragraph.component"
import Button from "../button/button.component"
import Image from "next/image"

const AboutSection: React.FC = () => {
	return (
		<SectionContainer id="about">
			<Container>
				<IluFigure>
					<Image
						src="/assets/about-section/ilu-v2.svg"
						alt="ilu"
						layout="fixed"
						width={260}
						height={370}
						objectFit="contain"
					/>
				</IluFigure>
				<Content>
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
						<Button rounded>Buy tickets</Button>
						<Button outline rounded>
							Apply to speak
						</Button>
					</ButtonsContainer>
				</Content>
			</Container>
		</SectionContainer>
	)
}

export default AboutSection

const SectionContainer = styled.section`
	padding: 5rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 10rem 0;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;

	gap: 1.5rem;
`

const IluFigure = styled.figure`
	position: relative;
	/* width: 100%;
	max-width: 26rem; */
	justify-self: center;
`

const Content = styled.div`
	max-width: 65rem;

	h2 {
		text-align: center;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		h2 {
			text-align: start;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const ButtonsContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	gap: 2rem;
	margin-top: 4rem;
`
