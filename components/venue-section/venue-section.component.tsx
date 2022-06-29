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
						layout="fixed"
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
	padding: 10rem 0;
`

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`

const IluFigure = styled.figure`
	position: relative;
	/* width: 100%;
	max-width: 26rem; */
	justify-self: center;
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
