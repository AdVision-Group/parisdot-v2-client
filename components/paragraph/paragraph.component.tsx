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
	font-size: 2rem;
	max-width: 60rem;
	margin-bottom: 2rem;
`
