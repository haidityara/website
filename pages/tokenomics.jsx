import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tokenomics() {
    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
            </Head>

            <Navbar/>

            <main id={`tokenomics`}>
                <section id="">
                    <div className="tokenomics-bg">
                        <div className="content-bg">
                            <div className="radian-left"/>
                            <div className="radian-right"/>
                            <div className="rocket">
                                <img className="" src="images/tokenomics/TextEffectMovieTitle3FP 3.svg" alt=""
                                     srcSet=""/>
                            </div>
                        </div>
                    </div>


                    <div className="container tokenomics-main">
                        <div className="row">
                            <div className="col">
                                <p className="muted m-0">Tokenomics</p>
                            </div>
                        </div>
                        <div className="row token-suply-info">
                            <div className="col-md-6">
                                <h2 className="metaverse-title">Token supply</h2>
                                <p className="sub-title-1">88,888,888 $TEAM tokens will be created at the token
                                    generation event. $TEAM tokens distribution will be 40% to Community, 26% to
                                    Investors, 18% to Treasury, 15% to Founders, and 1% to Advisors/Influencers. </p>

                                <div className="btn_b btn-meta btn btn-success mt-4">
                                    <a href="#">
                                        <div className="btn_b--textwrap h-100">
                                            <div id="con_wallet" className="btn_b--txt d-flex align-items-center justify-content-center ">
                                                Whitepaper  <img src="images/tokenomics/button-arrow.svg" alt="" srcSet=""/>
                                            </div>
                                        </div>
                                        <div className="btn_b--bgwrap">
                                            <div className="btn_b--bg">
                                                <div className="btn_b--fill no_full"/>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <h3>88,888,888</h3>
                                <p className="sub-title-2">$TEAM Tokens</p>
                                <h3 className="steam">35% of $TEAM</h3>
                                <p className="sub-title-2">Gets distributed to Community</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <img className="img-fluid img-chart" src="images/tokenomics/grafik.svg" alt="" srcSet=""/>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md">
                                <h2 className="flyWheel-title">Token flywheel</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center flyWheel-content">
                            <div className="col-md">
                                <img className="mb-4" src="images/tokenomics/token-1.svg" alt="" srcSet=""/>
                                    <h4 className="player">player</h4>
                                    <p className="sub-title-3">Portion of revenue generated from the player is fed back
                                        into TEAM DAO. All earnings from players of different games are aggregated into
                                        the TEAM token.</p>
                            </div>
                            <div className="col-md">
                                <img className="mb-4" src="images/tokenomics/token-2.svg" alt="" srcSet=""/>
                                    <h4 className="asset">asset</h4>
                                    <p className="sub-title-3">Direct ownership: TEAM will directly own, develop and
                                        generate yield on high quality NFT and metaverse assets. Indirect ownership:
                                        TEAM retains 20% ownership of all assets purchased by TEAM owners.</p>
                            </div>
                            <div className="col-md-3">
                                <img className="mb-4" src="images/tokenomics/token-3.svg" alt="" srcSet=""/>
                                    <h4 className="fees">Fees</h4>
                                    <p className="sub-title-3">One time initiation fees for owners and onboarding fees
                                        for players. Marketplace transaction fees - assets traded on the marketplace
                                        pays a % royalty fee to TEAM.</p>
                            </div>
                        </div>
                    </div>


                </section>
            </main>


            <Footer/>
        </>
    );
}

