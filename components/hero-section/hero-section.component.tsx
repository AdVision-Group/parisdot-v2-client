// Utils
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
// import Image from "next/image"
import Image from "../image/image.component"
import Button from "../button/button.component"
import Link from "next/link"

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
			src: "/assets/partners/Parity-v3.png",
			alt: "parity logo",
			href: "https://www.parity.io/",
			// width: 90,
			// height: 50,
		},
		{
			src: "/assets/partners/huok.png",
			alt: "kr1 logo",
			href: "https://kr1.io/",
			// width: 50,
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
			src: "/assets/partners/day-2/momentum.png",
			alt: "momentum logo",
			href: "https://momentum.xyz/",
			width: 130,
		},
		{
			src: "/assets/partners/Moonbeam-Logo.png",
			alt: "moonbeam logo",
			href: "https://moonbeam.network/",
		},
		{
			src: "/assets/partners/Authtrail.png",
			alt: "authtrail logo",
			href: "https://authtrail.com/?utm_source=moonbeam&utm_medium=directory&utm_campaign=featuredpartner",
		},
		{
			src: "/assets/partners/hdx.png",
			alt: "hydra logo",
			href: "https://hydradx.io/",
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
	const partners2 = [
		{
			src: "/assets/partners/Blockchain-HEC.png",
			alt: "Blockchain-HEC logo",
			href: "https://blockchain-hec.com/",
			width: 150,
			// height: 60,
		},
		{
			src: "/assets/partners/ternoa.png",
			alt: "ternoa logo",
			href: "https://www.ternoa.com/",
			width: 25,
		},
		{
			src: "/assets/partners/narative.png",
			alt: "narative logo",
			href: "https://www.narative.io/",
			width: 130,
		},

	]
	const mediaSponsors = [
		{
			src: "/assets/partners/future_of_money.png",
			alt: "cointelegraph logo",
			href: "https://cointelegraph.com/",
			width: 150,
			// height: 60,
		}
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
						delay: 0.6,
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
						duration: DURATION + 0.4,
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
						duration: DURATION + 0.4,
						delay: 2,
					}}
				>
					3 days of conference and workshop sessions organized by some of the
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
						delay: 3,
					}}
				>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.eventbrite.com/e/parisdotcomm-tickets-372008245677"
					>
						<Button rounded>Buy tickets</Button>
					</a>
					{/* <a
						rel="noopener noreferrer"
						target="_blank"
						href="https://xkmlgcptw4h.typeform.com/to/WgZTsjqB"
					> */}
					<Link href="/#conference">
						<Button outline rounded>
							Conf program
						</Button>
					</Link>
					{/* </a> */}
				</ButtonsContainer>

				<div>
					<PartnersContainer
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1.2,
							delay: 3.8,
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
					<MorePartners
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1.2,
							delay: 5,
						}}
					>
					</MorePartners>
					<SupportersAndMediaContainer>
						<HeadingAndContentContainer>
							<SupportersAndMediaHeading
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							transition={{
								duration: 1,
								delay: 5,
							}}
							>Supported By</SupportersAndMediaHeading>
					<Partners2Container
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 6.2,
						}}
					>
						{partners2.map((partner, idx) => (
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
										width={partner.width || 150}
										// height={partner.height || 40}
										height={60}
									/>
								</motion.figure>
							</a>
						))}
					</Partners2Container>
					</HeadingAndContentContainer>
					<HeadingAndContentContainer>
						<SupportersAndMediaHeading
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 5,
						}}>Media Sponsors</SupportersAndMediaHeading>
					<Partners2Container
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 6.2,
						}}
					>
						{mediaSponsors.map((partner, idx) => (
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
										width={partner.width || 150}
										// height={partner.height || 40}
										height={60}
									/>
								</motion.figure>
							</a>
						))}
					</Partners2Container>
					</HeadingAndContentContainer>
					</SupportersAndMediaContainer>		
				</div>
			</SectionContainer>
		</React.Fragment>
	)
}

export default HeroSection

const SupportersAndMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	@media (max-width: ${props => props.theme.breakpoints.sm}) {
		flex-direction: column;
	}
`

const SupportersAndMediaHeading = styled(motion.h3)`
	font-size: 3rem;
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 1rem;`

const HeadingAndContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 37%;
	margin: 1rem;
	justify-content: center;
	@media (max-width: ${props => props.theme.breakpoints.sm}) {
		width: 100%;
		margin: 2rem;
	}
`

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
	max-width: 90rem;
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

const Partners2Container = styled(motion.div)`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	max-width: 67rem;
	margin-left: auto;
	gap: 2.5rem;
	margin: 0 auto 0;
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

const MorePartners = styled(motion.p)`
	text-align: center;
	text-transform: uppercase;
	font-size: 2.5rem;
	margin-top: 3rem;
	margin-bottom: 1rem;
`
