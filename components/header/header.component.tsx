// Utils
import React from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

// Components
// import Image from "next/image"
import Image from "../image/image.component"
import Link from "next/link"

// Hooks
import { useBoolean } from "usehooks-ts"

// Icons
import { FaTwitter, FaDiscord } from "react-icons/fa"

const Header: React.FC = () => {
	const { value: showMobileNav, toggle: toggleMobileNav } = useBoolean(false)

	return (
		<React.Fragment>
			<HeaderContainer>
				<Container>
					<LogoContainer>
						<Image
							src="/assets/logog_paris.svg"
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
							<li className="link">
								<Link href={"/#about"}>About</Link>
							</li>
							<li className="link">
								<Link href={"/#venue"}>Venue</Link>
							</li>
							<li className="icon">
								<a
									// href="https://discord.gg/uKf968bd"
									href="https://discord.parisdotcomm.org/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaDiscord />
								</a>
							</li>
							<li className="icon">
								<a
									href="https://twitter.parisdotcomm.org/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<FaTwitter />
								</a>
							</li>
							<li className="ham">
								<ToggleButton
									onClick={() => toggleMobileNav()}
									isOpen={showMobileNav}
								>
									<div />
									<div />
									<div />
									<span
										style={{
											position: "absolute",
											visibility: "hidden",
											opacity: 0,
											display: "none",
										}}
									>
										menu
									</span>
								</ToggleButton>
							</li>
						</ul>
					</nav>
				</Container>
			</HeaderContainer>
			<AnimatePresence>
				{showMobileNav && (
					<MobileNav
						initial={{
							// opacity: 0,
							x: 1000,
						}}
						animate={{
							// opacity: 1,
							x: 0,
						}}
						exit={{
							// opacity: 0,
							x: 1000,
						}}
						transition={{
							duration: 0.8,
						}}
					>
						<ul>
							<li className="link" onClick={toggleMobileNav}>
								<Link href={"/#about"}>About</Link>
							</li>
							<li className="link" onClick={toggleMobileNav}>
								<Link href={"/#venue"}>Venue</Link>
							</li>
						</ul>
					</MobileNav>
				)}
			</AnimatePresence>
		</React.Fragment>
	)
}

export default Header

const MobileNav = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	width: 20rem;
	height: 100%;
	bottom: 0;
	background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
	z-index: 98;

	padding: 10rem 1.5rem;

	ul {
		list-style: none;

		li {
			margin-bottom: 1rem;

			a {
				display: block;
				text-decoration: none;
				color: ${({ theme }) => theme.colors.linkColor};
			}
		}
	}
`

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
			align-items: center;
			gap: 1rem;
			list-style: none;
			margin: 0;
			padding: 0;

			li {
				a {
					display: block;
					text-decoration: none;
					color: ${({ theme }) => theme.colors.linkColor};
				}

				&.link {
					display: none;
				}
				&.icon {
					a {
						background-color: ${({ theme }) =>
							theme.colors.bodyBackgroundColor};
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 1rem;
						border-radius: 50%;

						position: relative;

						:before {
							content: "";
							background: ${({ theme }) => theme.colors.buttonBackgroundColor};
							position: absolute;
							top: -0.1rem;
							left: -0.1rem;
							right: -0.1rem;
							bottom: -0.1rem;
							z-index: -1;
							border-radius: 50%;
						}
					}
				}
			}
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		nav {
			ul {
				gap: 1.5rem;

				li {
					&.link {
						display: block;
					}
					&.ham {
						display: none;
					}
				}
			}
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
	padding: 1.4rem 1.5rem;
	margin: 0 auto;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 0.8rem 1.5rem;
		}
	}
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

const ToggleButton = styled.button<{ isOpen: boolean }>`
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};

	transition: all 0.5s ease-out;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	width: 5rem;
	height: 5rem;
	border: 1px solid #fff;
	border-radius: 50%;

	position: relative;
	div {
		position: absolute;
		width: 1.8rem;
		height: 0.2rem;
		background-color: ${({ theme }) => theme.fonts.primary};
		transition: all 0.3s ease-in-out;
		${(props) =>
			props.isOpen
				? css`
						&:nth-child(1) {
							top: 2.3rem;
							left: 1.4rem;
							transform: rotate(45deg);
						}
						&:nth-child(2) {
							opacity: 0;
							left: 1.6rem;
						}
						&:nth-child(3) {
							bottom: 2.3rem;
							left: 1.4rem;
							transform: rotate(-45deg);
						}
				  `
				: css`
						&:nth-child(1) {
							top: 1.5rem;
							left: 1.4rem;
						}
						&:nth-child(2) {
							top: 50%;
							left: 1.4rem;

							transform: translateY(-50%);
						}
						&:nth-child(3) {
							bottom: 1.5rem;
							left: 1.4rem;
						}
				  `}
	}

	&:hover {
		border: 1px solid ${({ theme }) => theme.fonts.primary};

		div {
			background-color: ${({ theme }) => theme.fonts.primary};
		}
	}
`
