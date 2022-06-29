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
	font-size: 5rem;
	font-weight: 1000;
	margin-bottom: 1rem;
`
