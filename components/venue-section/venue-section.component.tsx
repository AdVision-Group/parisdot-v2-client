// Utils
import React from "react"
import styled from "styled-components"

// Components
import Title from "../title/title.component"
import Image from "../image/image.component"
import Paragraph from "../paragraph/paragraph.component"
import Button from "../button/button.component"

const VenueSection: React.FC = () => {
	return (
		<SectionContainer id="venue">
			<Ilustration>
				<Image
					src={"/assets/ilustrations/left_middle-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
				/>
			</Ilustration>
			<Container>
				<Content>
					<Title>VENUE - ARAB WORLD INSTITUTE</Title>
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
						src="/assets/venue-section/ilu-o.png"
						alt="ilu"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
					/>
				</IluFigure>
			</Container>
		</SectionContainer>
	)
}

export default VenueSection

const Ilustration = styled.figure`
	position: absolute;
	left: 0;
	z-index: -1;
	width: 35%;
	height: auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
		display: none;
	}
`

const SectionContainer = styled.section`
	padding: 5rem 1.5rem 10rem;

	max-width: 120rem;
	margin: 0 auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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
	/* flex-wrap: wrap; */
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

	a {
		width: 100%;
		display: block;
		button {
			width: 100%;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
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
