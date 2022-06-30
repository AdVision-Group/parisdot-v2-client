// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "../image/image.component"

const FooterSection: React.FC = () => {
	return (
		<React.Fragment>
			<SectionContainer>
				<figure>
					<Image
						src="/assets/footer-section/see-you-there-v2-o.png"
						alt="see you there"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
					/>
				</figure>
			</SectionContainer>
			<Ilustration>
				<Image
					src={"/assets/ilustrations/left_bottom-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
				/>
			</Ilustration>

			<Ilustration2>
				<Image
					src={"/assets/ilustrations/right_bottom-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
				/>
			</Ilustration2>
		</React.Fragment>
	)
}

export default FooterSection

const Ilustration = styled.figure`
	position: absolute;
	bottom: -2rem;
	left: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`
const Ilustration2 = styled.figure`
	position: absolute;
	right: 0;
	bottom: -2rem;
	z-index: -1;
	width: 35%;
	height: auto;
`

const SectionContainer = styled.section`
	position: relative;
	/* margin-bottom: -5rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			/* margin-bottom: -15rem; */
		}
	}
`
