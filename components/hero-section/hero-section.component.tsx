// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "next/image"
import Button from "../button/button.component"

const HeroSection: React.FC = () => {
	const partners = [
		{
			src: "/assets/partners/astar.png",
			alt: "astar logo",
			href: "https://astar.network/",
			width: 50,
			height: 40,
		},
		{
			src: "/assets/partners/dot_validator_alliance.png",
			alt: "dot validator alliance logo",
			href: "https://dotvalidators.org/",
			width: 50,
		},
		{
			src: "/assets/partners/hdx.png",
			alt: "hydra logo",
			href: "https://hydradx.io/",
		},
		{
			src: "/assets/partners/logion.png",
			alt: "logion logo",
			href: "https://logion.network/",
			width: 50,
		},
		{
			src: "/assets/partners/manta.png",
			alt: "manta network logo",
			href: "https://www.manta.network/",
		},
		{
			src: "/assets/partners/Moonbeam-Logo.png",
			alt: "moonbeam logo",
			href: "https://moonbeam.network/",
		},
		{
			src: "/assets/partners/Parity.png",
			alt: "parity logo",
			href: "https://www.parity.io/",
		},
		// {
		// 	src: "/assets/partners-v2/logos-v2/shiden.png",
		// 	alt: "shiden logo",
		// 	href: "https://shiden.astar.network/",
		// 	width: 50,
		// },
		{
			src: "/assets/partners/phala-network-logo-white.png",
			alt: "phala network logo",
			href: "https://www.phala.network/en/",
			width: 90,
		},
		{
			src: "/assets/partners/unique.png",
			alt: "unique logo",
			href: "https://unique.network/",
			// width: 90,
		},

		{
			src: "/assets/partners/ztg.png",
			alt: "Zeitgeist logo",
			href: "https://zeitgeist.pm/",
			// width: 80,
		},
	]
	return (
		<React.Fragment>
			<Ilustration>
				<Image
					src={"/assets/ilu.svg"}
					alt="ilu"
					layout="fixed"
					width={1000}
					height={1000}
				/>
			</Ilustration>
			<Ilustration2>
				<Image
					src={"/assets/ilu-2.svg"}
					alt="ilu"
					layout="fixed"
					width={1000}
					height={1000}
				/>
			</Ilustration2>
			<SectionContainer>
				<HeaderP>FRANCE - PARIS</HeaderP>
				<HeaderP>19.07 - 21.07</HeaderP>
				<TitleFigure>
					<Image
						src={"/assets/hero-section/conf-w-shop-v2.svg"}
						alt="Conf W-shop"
						layout="responsive"
						width={100}
						height={20}
					/>
				</TitleFigure>
				<Description>
					3 days of conference and workshops sessions organized by some of the
					leading projects of the Polkadot and Kusama ecosystems.
				</Description>

				<ButtonsContainer>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.eventbrite.com/e/parisdotcomm-tickets-372008245677"
					>
						<Button rounded>Buy tickets</Button>
					</a>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://xkmlgcptw4h.typeform.com/to/WgZTsjqB"
					>
						<Button outline rounded>
							Apply to speak
						</Button>
					</a>
				</ButtonsContainer>

				<PartnersContainer>
					{partners.map((partner, idx) => (
						<a
							key={idx}
							href={partner.href}
							rel="noopener noreferrer"
							target="_blank"
						>
							<motion.figure
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{
									scale: 0.97,
								}}
							>
								<Image
									src={partner.src}
									placeholder="blur"
									blurDataURL="data:image/webp;base64,UklGRoADAABXRUJQVlA4WAoAAAAgAAAAMgEAcAAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBCAQAA8BMAnQEqMwFxAD7tcq9Sv7KuoqYV6rPwHYlpbt1gaSuAGK1SOgZXCQB+09c5Zv7sniqJ11Rxwb6giHHE70G1m28ifhTEbxgi82TUoOCwTCznCPb1IckV9jaEjcc/wv9uOFdmdFs7+FDOxs9D0DRVtom61OeNstP7gqHIOxoEDMGLZp2WvuIFyAVzyn/abVs2o6Jx5oskSUmNYp4t/Ch2ZXKprEp4t8UQAP7d/gaRycSxAF3HIB/ELSy8eiSWDiQzh/WXsXQItBPQugiG3ytAP1f+vQTSDtoX5+FXBj4lT30wo15TdqxxbBs9pA+bY+nlasVFK95VefsPMdSE/gHqBiVIe4df2Dxap3RkpTuffNtdvSzYxJxRQWf+RW7Jmh4H48fpJaX9UAcx3JDulb9bxilwGWFBmAFddJh7A3kHeQAAAA=="
									alt={partner.alt}
									width={partner.width || 100}
									height={partner.height || 40}
									objectFit="contain"
									layout="fixed"
								/>
							</motion.figure>
						</a>
					))}
				</PartnersContainer>
			</SectionContainer>
		</React.Fragment>
	)
}

export default HeroSection

const Ilustration = styled.figure`
	position: absolute;
	top: -40rem;
	left: -40rem;
`
const Ilustration2 = styled.figure`
	position: absolute;
	top: -40rem;
	right: -40rem;
`

const SectionContainer = styled.section``

const HeaderP = styled.p`
	font-size: 1.9rem;
	font-weight: 1000;
	text-align: center;
`

const TitleFigure = styled.figure`
	position: relative;
	max-width: 79rem;
	margin: 0 auto;
`

const PartnersContainer = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 60rem;
	margin-left: auto;
	gap: 2.5rem;
	margin: 3rem auto 0;
	padding-top: 0.5rem;

	figure {
		wdith: 100%;
		max-width: 15rem;
		position: relative;
	}
`

const Description = styled.p`
	text-align: center;
	font-size: 2rem;
	max-width: 60rem;
	margin: 0 auto;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 4rem;
`
