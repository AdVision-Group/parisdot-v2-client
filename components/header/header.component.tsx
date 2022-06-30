// Utils
import React from "react"
import styled from "styled-components"

// Components
// import Image from "next/image"
import Image from "../image/image.component"

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<Container>
				<LogoContainer>
					<Image
						src="/assets/parisdot_logo.svg"
						alt="ParisDOT Logo"
						effect="blur"
						style={{
							width: "100%",
							height: "100%",
							marginTop: "0.7rem",
							objectFit: "contain",
							objectPosition: "center",
						}}
					/>
				</LogoContainer>

				<nav>
					<ul>
						<li>About</li>
						<li>Venue</li>
					</ul>
				</nav>
			</Container>
		</HeaderContainer>
	)
}

export default Header

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
	overflow: hidden;
	backdrop-filter: blur(2rem);

	nav {
		display: none;

		ul {
			display: flex;
			gap: 1.5rem;
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		nav {
			display: block;
		}

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 120rem;
	padding: 0.5rem 1.5rem;
	margin: 0 auto;
`

const LogoContainer = styled.figure`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 17rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			max-width: 25rem;
		}
	}
`
