// Utils
import React from "react"
import styled from "styled-components"

interface IProps {
	talkDescription?: string | JSX.Element,
    speakerBio?: string | JSX.Element,
	speakerName?: string,
}

const SpeakerDescription: React.FC<IProps> = ({ talkDescription, speakerBio, speakerName }) => {
	return <div>
		 {talkDescription && (<div>
		<h3>Details</h3>
		<DescriptionParagraph>{talkDescription}</DescriptionParagraph></div>)}
		
		{speakerBio && (<div>
		<h3>{speakerName ?? "Speaker bio"}</h3>
		<DescriptionParagraph>{speakerBio}</DescriptionParagraph>
		</div>)}
		</div>
}

const DescriptionParagraph = styled.p`
	a {
		color: #FF008C;
		transition: color 0.2s ease-in-out;
	}
	a:hover {
		color: white;
	}
	`

export default SpeakerDescription
