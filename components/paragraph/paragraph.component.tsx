// Utils
import React from "react"
import styled from "styled-components"

interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const Paragraph: React.FC<IProps> = ({ children }) => {
	return <P>{children}</P>
}

export default Paragraph

const P = styled.p`
	font-size: 1.6rem;
	max-width: 60rem;
	margin-bottom: 2rem;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 2rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`
