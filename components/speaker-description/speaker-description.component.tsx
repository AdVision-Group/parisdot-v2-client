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
		<h3>Presentation description</h3>
		<p>{talkDescription}</p></div>)}
		
		{speakerBio && (<div>
		<h3>{speakerName ?? "Speaker bio"}</h3>
		<p>{speakerBio}</p>
		</div>)}
		</div>
}

export default SpeakerDescription
