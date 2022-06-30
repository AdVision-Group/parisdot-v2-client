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
			<Ilustration>
				<Image
					src={"/assets/ilustrations/left_middle-o.png"}
					alt="ilu"
					layout="responsive"
					width={577}
					height={889}
					// placeholder="blur"
					// blurDataURL=""
					placeholder="blur"
					blurDataURL="data:image/webp;base64,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"
				/>
			</Ilustration>
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
						src="/assets/venue-section/ilu-o.png"
						alt="ilu"
						layout="responsive"
						width={425}
						height={330}
						objectFit="contain"
						placeholder="blur"
						blurDataURL="data:image/webp;base64,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"
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
`

const SectionContainer = styled.section`
	padding: 5rem 0 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			padding: 10rem 0 0;
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
