import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";


export default function Marketplace() {
    const [loading, setLoading] = useState(false);
    const [float_robot, setFloatRobot] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

        setTimeout(() => {
            setFloatRobot(true)
        }, 9000)

    }, [])


    const startAudio = () => {
        let audio = document.getElementById('jarvis')
        audio.play()
    }

    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
            </Head>

            {loading ? <Loader/> : ''}


            <Navbar/>

            <main id="marketplace">
                <audio style={{display: 'none'}} id="jarvis" controls src="/sounds/TEAMjarvis.m4a"/>
                <div className="radiant"/>
                <div className="content-empty-section pt-5 flex-column">
                    <h1 className="title-section text-center">marketplace</h1>
                    <br/>
                    <h3 className="title-section neon">COMING SOON...</h3>
                </div>
            </main>

            <div className="robo-fixed" onClick={() => startAudio()}>
                <img className={`_floating_left ${float_robot ? `floating_left_right` : null}`} src="images/home/robo.png" alt=""/>
            </div>
            <Footer/>
        </>
    )
}
