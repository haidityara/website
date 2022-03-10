import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import Loader from "../components/Loader";


export default function MediaKit() {
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

            <main id="mediakit">
                <audio style={{display: 'none'}} id="jarvis" controls src="/sounds/TEAMjarvis.m4a"/>
                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div className="col text-center">
                            <h3>LOGOS</h3>
                        </div>
                    </div>
                    <div className="row text-center media-assets">
                        <div className="col-md-4">
                            <div className="box-media">
                                <img style={{width: '260px'}} src="images/team-logo.png" alt="T.E.A.M logo"/>
                                <p>T.E.A.M LOGO</p>
                                <a className="btn" href="images/team-logo.png" download>DOWNLOAD</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box-media">
                                <img style={{width: '260px'}} src="images/team-logo-black.png" alt="T.E.A.M logo"/>
                                <p>T.E.A.M LOGO Black Background</p>
                                <a className="btn" href="images/team-logo-black.png" download>DOWNLOAD</a>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-media">
                                <img style={{width: '73px'}} src="images/round-team-logo.png" alt="T.E.A.M logo"/>
                                <p>T.E.A.M LOGO ROUND</p>
                                <a className="btn" href="images/round-team-logo.png" download>DOWNLOAD</a>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-3">
                        <div className="col text-center">
                            <h3>COLORS</h3>
                        </div>
                    </div>

                    <div className="row text-center media-assets">
                        <div className="col-md-6">
                            <div className="box-media d-flex justify-content-center flex-column">
                                <div style={{background: '#1b8520 '}} className="box-color"/>
                                <p>Accent Color</p>
                                <p>#2afe30 </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-media d-flex justify-content-center flex-column">
                                <div style={{background: '#2afe30 '}} className="box-color"/>
                                <p>Primary Color</p>
                                <p>#1b8520 </p>
                            </div>
                        </div>

                    </div>


                </div>

            </main>


            <div className={`robo-fixed ${float_robot ? `robo-fixed-2` : null} `} onClick={() => startAudio()}>
                <img className={`_floating_left ${float_robot ? `floating_left_right` : null}`}
                     src="images/home/robo.png" alt=""/>
            </div>
            <Footer/>
        </>
    )
}
