// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

const FooterSection: React.FC = () => {
	return (
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
	)
}

export default FooterSection

const SectionContainer = styled.section``
