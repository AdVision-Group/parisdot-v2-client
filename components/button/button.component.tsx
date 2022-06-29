// Utils
import styled from "styled-components"
import { motion } from "framer-motion"

export interface IButtonProps {
	left?: string
	right?: string
	top?: string
	bottom?: string
	type?: "button" | "submit" | "reset" | undefined
	disabled?: boolean
	width?: string
	rounded?: boolean
	onClick?: (e: any) => void
	loading?: boolean
	outline?: boolean | string
	children: React.ReactNode | React.ReactNode[]
}

const Button: React.FC<IButtonProps> = ({
	children,
	type,
	loading,
	onClick,
	disabled,
	...rest
}) => {
	return (
		<ButtonContainer
			{...rest}
			type={type}
			onClick={onClick}
			whileHover={{
				scale: disabled ? 1 : 1.05,
			}}
			whileTap={{
				scale: disabled ? 1 : 0.97,
			}}
			disabled={disabled}
		>
			{loading ? "loading..." : children}
		</ButtonContainer>
	)
}

export default Button

export const ButtonContainer = styled(motion.button)<IButtonProps>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ outline }) => (outline ? "transparent" : "unset")};
	background: ${({ outline, theme }) =>
		outline ? "unset" : theme.color.buttonBackgroundColor};
	color: ${({ theme }) => theme.color.buttonColor};
	min-width: 5rem;
	width: ${({ width }) => (width ? width : "unset")};
	padding: 2rem 6rem;
	font-size: 1.7rem;
	font-family: inherit;
	font-weight: 400;
	border-radius: ${({ rounded }) => (rounded ? "999rem" : ".7rem")};
	border: ${({ theme, outline }) =>
		outline ? `1px solid ${theme.color.buttonBorderColor}` : `unset`};
	outline: none;
	margin: ${({ left, right, top, bottom }) =>
		`${top || 0} ${right || 0} ${bottom || 0} ${left || 0}`};

	&:focus {
		outline: none;
	}

	&:disabled {
		position: relative;
		cursor: default;
	}
`
