// Utils
import React from "react"
import styled from "styled-components"

interface IProps {
	talkDescription: string | JSX.Element,
    speakerBio: string | JSX.Element,
	speakerName?: string,
}

const SpeakerDescription: React.FC<IProps> = ({ talkDescription, speakerBio, speakerName }) => {
	return <div><h3>Presentation description</h3><p>{talkDescription}</p><h3>{speakerName ?? "Speaker bio"}</h3><p>{speakerBio}</p></div>
}

export default SpeakerDescription
