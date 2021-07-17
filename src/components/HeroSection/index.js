import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hey, Welcome!</HeroH1>
                <HeroP>My name is Adyatma, and this is my first project using react. Hope you enjoy!</HeroP>
                <HeroBtnWrapper>
                    <Button to="discover" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>Get started {hover ? <ArrowForward /> : <ArrowRight /> }</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
