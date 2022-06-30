// Utils
import React from "react"
import styled from "styled-components"

interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

const Title: React.FC<IProps> = ({ children }) => {
	return <H2>{children}</H2>
}

export default Title

const H2 = styled.h2`
	font-size: 3.5rem;
	font-weight: 1000;
	margin-bottom: 1rem;
	line-height: 1.1;
	text-align: center;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		font-size: 5rem;
		text-align: start;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		}
	}
`
