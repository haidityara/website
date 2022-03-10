import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/tokenomics.css'
import '../styles/games.css'
import '../styles/home.css'
import '../styles/mediakit.css'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" type="image/png" sizes="32x32" href="images/round-team-logo.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>

                <link href="images/round-team-logo.png" rel="apple-touch-icon"/>
            </Head>

            <Component {...pageProps}/>
        </>
    );
}

export default MyApp
