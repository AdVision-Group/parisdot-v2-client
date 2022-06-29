// Utils
import React from "react"
import styled from "styled-components"

// Components
import Title from "../title/title.component"
import Paragraph from "../paragraph/paragraph.component"
import Button from "../button/button.component"
import Image from "next/image"

const VenueSection: React.FC = () => {
	return (
		<SectionContainer>
			<Container>
				<Content>
					<Title>VENUE</Title>
					<Paragraph>
						was designed to create strong and durable cultural ties while
						cultivating constructive dialogue between the Arab World, France,
						and Europe. Since its creation it has become a place of cultural
						exchange in Paris but also an interlocutor in the field of
						mathematics and research.
					</Paragraph>
					<ButtonsContainer>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://goo.gl/maps/SdJsiFNCFe38ZAHM6"
						>
							<Button outline rounded>
								View in maps
							</Button>
						</a>
					</ButtonsContainer>
				</Content>
				<IluFigure>
					<Image
						src="/assets/venue-section/ilu.svg"
						alt="ilu"
						layout="responsive"
						width={425}
						height={330}
						objectFit="contain"
					/>
				</IluFigure>
			</Container>
		</SectionContainer>
	)
}

export default VenueSection

const SectionContainer = styled.section`
	padding: 5rem 0 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 0;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			}
		}
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column-reverse;
	align-items: center;
	flex-wrap: wrap;
	gap: 3rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 1.5rem;
				flex-direction: row;
			}
		}
	}
`

const IluFigure = styled.figure`
	position: relative;
	width: 100%;

	max-width: 42rem;
	justify-self: center;
	/* margin: 1.5rem; */

	height: auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Content = styled.div`
	max-width: 65rem;
`

const ButtonsContainer = styled.div`
	display: flex;
	/* justify-content: center; */
	gap: 2rem;
	margin-top: 4rem;
`
