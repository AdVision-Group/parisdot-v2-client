// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "../image/image.component"

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<a
				href="https://github.com/AdVision-Group/parisdot-v2-client"
				rel="noopener noreferrer"
				target="_blank"
			>
				<figure>
					<Image
						src="/assets/footer-section/github.png"
						alt="ParisDOT Logo"
						effect="blur"
						style={{
							width: "100%",
							height: "100%",
							// marginTop: "0.7rem",
							objectFit: "contain",
							objectPosition: "center",
						}}
					/>
				</figure>
			</a>
			<p>PDotComm ASBL 10, Giällewee, L-9749 Clervaux</p>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;

	p {
		text-align: center;
		margin-top: 1rem;
		font-family: "Acumin Variable Concept";
		font-weight: 100;
		font-size: 1.6rem;
	}
`
