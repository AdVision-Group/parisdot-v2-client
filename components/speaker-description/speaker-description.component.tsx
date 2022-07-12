// Utils
import React from "react"
import styled from "styled-components"

interface IProps {
	talkDescription: string | JSX.Element,
    speakerBio: string | JSX.Element,
}

const SpeakerDescription: React.FC<IProps> = ({ talkDescription, speakerBio }) => {
	return <div><h4>Presentation description</h4><p>{talkDescription}</p><h4>Speaker bio</h4><p>{speakerBio}</p></div>
}

export default SpeakerDescription
