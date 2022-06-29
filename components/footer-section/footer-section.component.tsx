// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

const FooterSection: React.FC = () => {
	return (
		<React.Fragment>
			<SectionContainer>
				<figure>
					<Image
						src="/assets/footer-section/see-you-there-v2.svg"
						alt="see you there"
						width={100}
						height={100}
						layout="responsive"
						objectFit="contain"
					/>
				</figure>
			</SectionContainer>
			<Ilustration>
				<Image
					src={"/assets/ilustrations/left_bottom.png"}
					alt="ilu"
					layout="responsive"
					width={577}
					height={852}
				/>
			</Ilustration>

			<Ilustration2>
				<Image
					src={"/assets/ilustrations/right_bottom.png"}
					alt="ilu"
					layout="responsive"
					width={842}
					height={1616}
				/>
			</Ilustration2>
		</React.Fragment>
	)
}

export default FooterSection

const Ilustration = styled.figure`
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`
const Ilustration2 = styled.figure`
	position: absolute;
	right: 0;
	bottom: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`

const SectionContainer = styled.section`
	position: relative;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			margin-bottom: -10rem;
		}
	}
`
