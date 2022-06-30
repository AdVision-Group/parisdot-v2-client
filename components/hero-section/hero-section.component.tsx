// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
// import Image from "next/image"
import Image from "../image/image.component"
import Button from "../button/button.component"

const DURATION = 0.6

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
			src: "/assets/partners/manta-o.png",
			alt: "manta network logo",
			href: "https://www.manta.network/",
		},
		{
			src: "/assets/partners/Moonbeam-Logo.png",
			alt: "moonbeam logo",
			href: "https://moonbeam.network/",
		},
		{
			src: "/assets/partners/Parity-v3.png",
			alt: "parity logo",
			href: "https://www.parity.io/",
			// width: 90,
			// height: 50,
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
			src: "/assets/partners/dot_validator_alliance.png",
			alt: "dot validator alliance logo",
			href: "https://dotvalidators.org/",
			width: 50,
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
					src={"/assets/ilustrations/left_top-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
					// width={638}
					// height={1654}
				/>
			</Ilustration>

			<Ilustration2>
				<Image
					src={"/assets/ilustrations/right_top-o.png"}
					alt="ilu"
					effect="blur"
					style={{
						objectFit: "contain",
					}}
					width={"100%"}
					// height={792}
				/>
			</Ilustration2>
			<SectionContainer>
				<HeaderP
					initial={{
						y: -200,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: DURATION,
						delay: 0.4,
					}}
				>
					PARIS, FRANCE - ARAB WORLD INSTITUTE
				</HeaderP>
				<HeaderP
					initial={{
						y: -200,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: DURATION,
					}}
				>
					19.07 - 21.07
				</HeaderP>
				<TitleFigure
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: DURATION,
						delay: 1,
					}}
				>
					<Image
						src={"/assets/hero-section/conf-w-shop-v2-o.png"}
						alt="ilu"
						effect="blur"
						style={{
							objectFit: "contain",
						}}
						width={"100%"}
						// height={20}
					/>
				</TitleFigure>
				<Description
					initial={{
						y: 200,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: DURATION,
						delay: 1.6,
					}}
				>
					3 days of conference and workshops sessions organized by some of the
					leading projects of the Polkadot and Kusama ecosystems.
				</Description>

				<ButtonsContainer
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 0.8,
						delay: 2.2,
					}}
				>
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

				<PartnersContainer
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					transition={{
						duration: 1.2,
						delay: 2.8,
					}}
				>
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
									alt="ilu"
									effect="blur"
									style={{
										objectFit: "contain",
									}}
									width={partner.width || 100}
									height={partner.height || 40}
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
	top: 0;
	left: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`
const Ilustration2 = styled.figure`
	position: absolute;
	top: 0;
	right: 0rem;
	z-index: -1;
	width: 35%;
	height: auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const SectionContainer = styled.section`
	max-width: 120rem;
	margin: 0 auto;
`

const HeaderP = styled(motion.p)`
	font-size: 1.9rem;
	font-weight: 1000;
	text-align: center;
`

const TitleFigure = styled(motion.figure)`
	position: relative;
	max-width: 79rem;
	margin: 0 auto;
`

const PartnersContainer = styled(motion.div)`
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
		position: relative;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Description = styled(motion.p)`
	text-align: center;
	font-size: 1.6rem;
	max-width: 60rem;
	margin: 0 auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 2rem;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const ButtonsContainer = styled(motion.div)`
	display: flex;
	justify-content: center;
	flex-direction: column;
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
		flex-direction: row;
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
