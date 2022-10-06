import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headderImg from "../assets/img/header-img.svg";
import TrackVisibility from 'react-on-screen';
import "animate.css";

export const Banner = () =>{
    const [loopUum, setLooNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRootate = ["Web Developer", "Web Designer", "UI/UX Desinger"]
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () =>{
        let i = loopUum % toRootate.length;
        let fullText = toRootate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0,text.length + 1);
        setText(updateText);

        if (isDeleting){
            setDelta(preDelta =>preDelta /2)
        }
        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLooNum(loopUum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">欢迎您的到来！</span>
                        <h1>{`Hi I'm HuiJi Wu`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle> </button>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headderImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}