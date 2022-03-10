export default function About() {
    return(
        <section id="about">
            <div className="about-bg">
                <div className="bg-galaxy-2">
                    <img src="images/home/bg-about-hero.png" loading="lazy" alt="" />
                </div>
                <div className="hexagon-left">
                    <img src="images/home/hexagon-left.svg" loading="lazy" alt="" />
                </div>
                <div className="hexagon-right">
                    <img src="images/home/hexagon-right.svg" loading="lazy" alt="" />
                </div>
                <div className="number-123">
                    <img src="images/home/number-123.svg" loading="lazy" alt="" />
                </div>
                <div className="about-robo v-none">
                    <img className='robo-rock' src="images/home/about-robo.png" loading="lazy" alt=""/>
                </div>
            </div>

            <div className="about-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 about-team mb-5">
                            <h2>About TEAM</h2>
                            <p>T.E.A.M has a proprietary scalable solution for guild management</p>
                            {/*<button className="btn btn-primary explore" type="button" >*/}
                            {/*    Explore*/}
                            {/*    <img src="images/home/button-icon.svg" alt=""/>*/}
                            {/*</button>*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <h3>Automated and scalable recruitment process</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="hexagon-bg">
                                <h4>Iniciate / Recruit</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="hexagon-bg">
                                <h4>Gamified Training</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="hexagon-bg">
                                <h4>Scholar</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
};
