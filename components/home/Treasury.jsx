import Image from "next/image";
import image1004 from "../../images/treasury/Group-1004.svg";
import imageG230 from "../../images/treasury/Group-230.svg";
import imageG232 from "../../images/treasury/Group-232.svg";
import logo3D1 from "../../images/treasury/logo-3d-1.png";


export default function Treasury() {
    return (
        <section id="treasury">
            <div className="treasury-bg">
                <div className="content-bg position-relative">
                    <div className="divider"/>
                    <div className="radial-left"/>
                    <div className="galaxy-night">
                        <img src="images/treasury/galaxy-night-landscape.png" loading="lazy" alt="Galaxy night"/>
                    </div>
                    <div className="image-3d-4">
                        <img className="_float" src="images/treasury/logo-3d-4.png" loading="lazy" alt=""/>
                    </div>
                    <div className="image-3d-3">
                        <img className="_float" src="images/treasury/logo-3d-3.png" loading="lazy" alt=""/>
                    </div>
                    <div className="meteoroid">
                        <img src="images/home/meteoroid.svg" alt="" loading="lazy" srcSet=""/>
                    </div>
                </div>
            </div>
            <div className="container main-content position-relative">
                <div className="title-section">
                    <h3 className="title-abs">Seamless ownership system</h3>
                </div>
                <div className="treasury-grid treasury-grid-main row justify-content-center">
                    <div className="col-3 d-flex flex-column ps-5">
                        <div className="img">
                            <Image src={image1004} width="40" height={40}/>
                        </div>
                        <span>TEAM MANAGEMENT</span>
                    </div>
                    <div className="col-1 t-g-image-svg d-flex align-items-center justify-content-center">
                        <Image src={imageG230}/>
                    </div>
                    <div className="col-2 d-flex flex-column text-center">
                        <span>SCHOLAR</span>
                        <span>(-30%)</span>
                        <span>ASSETS</span>
                    </div>
                    <div className="col-1 t-g-image-svg d-flex align-items-center justify-content-center rotate-left">
                        <Image loading="lazy" src={imageG230} width="100%"/>
                    </div>
                    <div className="col-1 d-flex flex-column text-center">
                        <div className="img ms-0 me-0">
                            <Image loading="lazy" src={logo3D1} width="40" height={40}/>
                        </div>
                        <span>WRAPPED <br/> TEAM</span>
                    </div>
                    <div className="col-1 t-g-image-svg d-flex align-items-center justify-content-center">
                        <Image loading="lazy" src={imageG232} width="100%"/>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center ">
                        <span>OWNER</span>
                    </div>
                </div>
                <div className="title-section">
                    <h3 className="title-abs">Equitable distribution of earnings</h3>
                </div>

                {/*grid 2*/}
                <div className="wrap-grid-2 w-100 position-relative d-flex justify-content-center">

                    <img src="images/treasury/Group-245.svg"  loading="lazy" className="parabola-img" alt=""/>

                    <div className="treasury-grid second-grid row justify-content-center w-100 position-absolute">
                        <div className="col-2 d-flex flex-column text-center justify-content-around grid-s-box">
                            <span>DAO / Token (-5%)</span>

                            <span>Owner (-25%)</span>
                        </div>
                        <div
                            className="col-1 t-g-image-svg d-flex align-items-center justify-content-center rotate-left">
                            <Image loading="lazy" src={imageG230} width="100%"/>
                        </div>
                        <div className="col-2 d-flex flex-column text-center">
                            <div className="img ms-0 me-0">
                                <Image loading="lazy" src={logo3D1} width="40" height={40}/>
                            </div>
                            <span>WRAPPED <br/> TEAM</span>
                        </div>
                        <div className="col-1 t-g-image-svg d-flex align-items-center justify-content-center">
                            <Image loading="lazy" src={imageG230}/>
                        </div>
                        <div className="col-2 d-flex flex-column text-center justify-content-around grid-s-box">
                            <span>Scholar (-55%)</span>

                            <span>Management (-15%)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
