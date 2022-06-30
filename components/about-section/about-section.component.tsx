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
			<Ilustration>
				<Image
					src={"/assets/ilustrations/right_middle-o.png"}
					alt="ilu"
					layout="responsive"
					placeholder="blur"
					blurDataURL="data:image/webp;base64,UklGRhQGAABXRUJQVlA4WAoAAAAgAAAAZQIASgMASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCDWAwAAcHIAnQEqZgJLAz7tdrhWqaclI6AIATAdiWlu4XdhG0AJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyG8AAP7/uhSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
					width={577}
					height={792}
				/>
			</Ilustration>
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

const Ilustration = styled.figure`
	position: absolute;
	right: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`

const SectionContainer = styled.section`
	padding: 5rem 0;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 10rem 0;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 15rem 0 10rem;
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
