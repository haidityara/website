export default function Games(){
    return(
        <section id="metaverse" className="section-metaverse">

            <div className="deck-ship">
                <div className="deck-bg">
                    <img loading="lazy" className="" src="images/home/deck-ship.png" alt="" srcSet="" />
                </div>
                <div className="robo-run v-none">
                    <img loading="lazy" src="images/home/robo-run.png" alt="" srcSet="" />
                </div>
            </div>

            <div className="meta-bg">
                <div className="content-bg">
                    <div className="polygon-left">
                        <img loading="lazy" src="images/meta/Polygon-left.svg" alt=""/>
                    </div>
                    <div className="meteor-left">
                        <img loading="lazy" src="images/meta/meteor.png" alt=""/>
                    </div>
                    <div className="logo-3d-left">
                        <img loading="lazy" src="images/meta/logo-3d-3.png" alt=""/>
                    </div>
                    <div className="logo-3d-right">
                        <img loading="lazy" src="images/home/logo-3d-right.svg" alt=""/>
                    </div>

                    <div className="radial-left"/>
                    <div className="radial-right"/>
                    <div className="polygon-right">
                        <img loading="lazy" src="images/meta/Polygon-right.svg" alt=""/>
                    </div>
                    <div className="metaverse-robo v-none">
                        <img loading="lazy" src="images/home/metaverse-robo.png" alt="" srcSet="" />
                    </div>
                </div>
            </div>



            <div className="container metaverse-main">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="metaverse-title">Metaverse and game exposure</h3>
                        <div className="btn_b btn-meta v-none">
                            <a href="">
                                <div className="btn_b--textwrap h-100">
                                    <div id="con_wallet" className="btn_b--txt d-flex align-items-center justify-content-center ">
                                        Explore <img loading="lazy" src="images/section-1/button-icon.svg" alt="" srcSet=""/>
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
                    <div className="col-md-8 metaverse-content">
                        <div className="games">
                            <im loading="lazy"g src="images/meta/Games.svg" alt="" className="pc"/>
                            <img loading="lazy" src="images/meta/games-mobile.png" alt="" className="tablet"/>
                        </div>
                        <div className="metaverse-description d-flex flex-row">
                            <div className="desc col">
                                <p>
                                    T.E.A.M carefully selects which metaverse and blockchain P2E games to
                                    participate in through a
                                    rigorous in-house curation methodology.
                                </p>
                                <p>
                                    Expand into other games with promising P2E economics as our player base
                                    grows and supporting
                                    infrastructure is present.
                                </p>
                            </div>
                            <div className="desc col">
                                <p>
                                    T.E.A.M will be an all-encompassing guild, diversified across numerous games
                                    and resilient in
                                    tokenomic.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>TEAM Token Utility & Player Management</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}