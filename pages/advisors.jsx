import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import Loader from "../components/Loader";


export default function Advisors() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
            </Head>

            {loading ? <Loader/> : ''}


            <Navbar/>

            <main>
                <div className="radiant"/>
                <div className="content-empty-section pt-5">
                    <h1 className="title-section text-center">Advisors</h1>
                </div>
            </main>


            <Footer/>
        </>
    )
}
