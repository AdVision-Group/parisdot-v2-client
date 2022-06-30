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
					src={"/assets/ilustrations/left_top-o.png"}
					alt="ilu"
					layout="responsive"
					placeholder="blur"
					blurDataURL="data:image/webp;base64,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"
					width={638}
					height={1654}
				/>
			</Ilustration>

			<Ilustration2>
				<Image
					src={"/assets/ilustrations/right_top-o.png"}
					alt="ilu"
					layout="responsive"
					// placeholder="blur"
					// blurDataURL=""
					placeholder="blur"
					blurDataURL="data:image/webp;base64,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"
					width={577}
					height={792}
				/>
			</Ilustration2>
			<SectionContainer>
				<HeaderP>FRANCE - PARIS</HeaderP>
				<HeaderP>19.07 - 21.07</HeaderP>
				<TitleFigure>
					<Image
						src={"/assets/hero-section/conf-w-shop-v2-o.png"}
						alt="Conf W-shop"
						layout="responsive"
						placeholder="blur"
						blurDataURL="data:image/webp;base64,UklGRooFAABXRUJQVlA4WAoAAAAgAAAAZQIAbwAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBMAwAAMCIAnQEqZgJwAD7tbK1RP6YpJygSbKvwHYlnbt4Ay1f7UNAy64a/4/+vgX5A1gKL4j3EtHroZ9sC4CsHd+wNnSyF38RFbeziY5Kyg6UhJ/RySm8ZMroDhSYylH7+5ckx6MFv8/khuh5cZi/BmCtt8U2C2WUMTHLdpDYZqri9qQQSNXoeRpD3trxr8na6de68KZa81ZCwpGarDPlscQ1U2qC8202qCGPvOlWKww//pemK8OBb/HO6QlXhKFDry0ezSkJV4ulR48tHrqTNcbes+2ATbGM7J5tzHpzfthuqky+UT2FStJ830K8G7rpMxnFztGn4LYEAuOQ3u7Z+UuOURVVKwINL6I/pGoUKaKzrHI5fAMbLA1fZ1OmQAP7vBfQT51TsnUZfOozYUQPtP7uplzApkffueZOZXP4x7g6CLzlKcOAWFOo2vpEmgjL6DXrGWOLc50ONKwh+oFh+rmpEMhjZ2I1LV8wpEfzBbI6uOGwoPlnUu7i/ixgsmT0X55CwWw6JhzpLZ270yJeF6vrdId7g3urO+FM2EfshnpuQjYWARWthWjur7nYj9koBAkb0c/WvAJEBgCrk0oHxccAXD5XioOOUsb1u4Y7IuE0UHwqnrE55ugupmxX8X7RpZkaaOVwQcyrv9RBbSVr1QJkRyyMxBa6TxnqnumQmtGiZpj66xsHpcCfvW2xYV/4QAt0emk5gcV7yqMgsvzVP0O3L1xOC/j0AAAaQSfcqY7MrKLgnkdRTFVJwVqmZkFurIUsXmzeJSNHbzsaw05zTF9bH6kU7qQFegJiXeA6ynKd5c73/9pl4Z3Vq6TyBMcUtFP4Y6bYU2rFjtkuf2eQA3L0vFOmHFg1kYvQWRf+GPD05fOhuF6cH3cLlOzSudTsxUMaQiRNTkIs97zkI98FHGba2yeuVJR37RiJ9HhQMBz4ILwL5KtZtkwJKEHaSi8a85lpGHfXxDfUn5+93h2PuiTkcN8/oNR0TijyGFOTwkY7K18ogJiw1BqFqjlLRP2KtJaH3CVTAJe6tuFbC9InsUNq38MfNb4id7WCvNAU/l2dwX228MmlNipxmd33Iz9UoO/dqaDcSeWL9fdyYvPsUAy4T0/HcUq8k/kGxxYAAAA=="
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
	top: 0;
	left: 0;
	z-index: -1;
	width: 35%;
	height: auto;
`
const Ilustration2 = styled.figure`
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
	width: 35%;
	height: auto;
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
		position: relative;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Description = styled.p`
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

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 4rem;
`
