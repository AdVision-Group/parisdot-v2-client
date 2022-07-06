import type { NextPage } from "next"
import Head from "next/head"
import React, { Suspense } from "react"
import dynamic from "next/dynamic"

// Components
import Header from "../components/header/header.component"
import HeroSection from "../components/hero-section/hero-section.component"

const AboutSection = dynamic(
	() => import("../components/about-section/about-section.component"),
	{
		suspense: true,
	}
)

const ProgramSection = dynamic(
	() => import("../components/program-section/program-section.component"),
	{
		suspense: true,
	}
)

const WorkshopSection = dynamic(
	() => import("../components/workshop-section/workshop-section.component"),
	{
		suspense: true,
	}
)

const VenueSection = dynamic(
	() => import("../components/venue-section/venue-section.component"),
	{
		suspense: true,
	}
)
const FooterSection = dynamic(
	() => import("../components/footer-section/footer-section.component"),
	{
		suspense: true,
	}
)

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>parisDOT Conf W-shops</title>
				<meta name="title" content="parisDOT Conf W-shops" />
				<meta
					name="description"
					content="3 days of conference and workshops, organized by leading Polkadot projects for the broader crypto family. 6/19 - 21 in Paris, France"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://parisdot.comm/" />
				<meta property="og:title" content="parisDOT Conf W-shops" />
				<meta
					property="og:description"
					content="3 days of conference and workshops, organized by leading Polkadot projects for the broader crypto family. 6/19 - 21 in Paris, France"
				/>
				<meta property="og:image" content="/meta-new.png" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://parisdot.comm/" />
				<meta property="twitter:title" content="parisDOT Conf W-shops" />
				<meta
					property="twitter:description"
					content="3 days of conference and workshops, organized by leading Polkadot projects for the broader crypto family. 6/19 - 21 in Paris, France"
				/>
				<meta property="twitter:image" content="/meta-new.png" />
			</Head>

			<Header />
			<main>
				<HeroSection />
				<Suspense fallback={<div />}>
					<AboutSection />
					<ProgramSection />
					<WorkshopSection />
					<VenueSection />
					<FooterSection />
				</Suspense>
			</main>
		</React.Fragment>
	)
}

export default Home
