// Utils
import React from "react"
import styled from "styled-components"

// Components
import Image from "next/image"

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<Container>
				<LogoContainer>
					<Image
						src="/assets/parisdot_logo.svg"
						alt="ParisDOT Logo"
						layout="fixed"
						width={200}
						height={60}
					/>
				</LogoContainer>

				<nav>
					<ul>
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
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
		ul {
			display: flex;
			gap: 1.5rem;
			list-style: none;
			margin: 0;
			padding: 0;
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
	display: flex;
	align-items: center;
	justify-content: center;
`
