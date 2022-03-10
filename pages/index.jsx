import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";

import About from '../components/home/About';
import Treasury from '../components/home/Treasury';
import Games from '../components/home/Games';
import Tokenomics from '../components/home/Tokenomics';


export default function Home() {
    const [loading, setLoading] = useState(false)
    const [float_robot, setFloatRobot] = useState(false)
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


            <main id={`home`}>

                <audio style={{display: 'none'}} id="jarvis" controls src="/sounds/TEAMjarvis.m4a"/>

                <div className="bg-galaxy-1">
                    <img src="images/home/bg-header-hero.png" loading="lazy" alt=""/>
                </div>
                <section id={`header`}>
                    <div className="header-bg">
                        <div className="bg-tunnel">
                            <img src="images/home/bg-header-hero-2.png" loading="lazy" alt=""/>
                        </div>
                        {/*<div className="robo">*/}
                        {/*    <img className="_floating_left" src="images/home/robo.png" alt=""/>*/}
                        {/*</div>*/}
                    </div>

                    <div className="container header-main">

                        <div className="row">
                            <div className="col">
                                <h2>The world’s first DeFi eSports Gaming DAO</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <p>T.E.A.M (Tokenized Esports Asset Management) is a Decentralized Autonomous
                                    Organization (DAO) that invests in non-fungible tokens (NFTs) used in top-tier
                                    blockchain games, Play-to-Earn (P2E)
                                    gaming, and the Metaverse.
                                </p>
                            </div>
                            <div className="col-2">
                                <p>
                                    T.E.A.M is at the intersection of professional eSports, asset management, and DeFi
                                    tokenomics.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            {/*<div className="col">*/}
                            {/*    <button className="btn explore" type="button" >*/}
                            {/*        Explore*/}
                            {/*        <img src="images/home/button-icon.svg" alt="" />*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>

                        <div className="row v-none">
                            <div className="col text-center">
                                <button className="btn btn-primary small-button">
                                    <img src="images/home/button-arrow.svg" alt=""/>
                                </button>

                            </div>
                        </div>
                    </div>
                </section>

                <About/>
                <Treasury/>
                <Games/>
                <Tokenomics/>


            </main>

            <div className="robo-fixed" onClick={() => startAudio()}>
                <img className={`_floating_left ${float_robot ? `floating_left_right` : null}`} src="images/home/robo.png" alt=""/>
            </div>
            <Footer/>
        </>
    )
}
