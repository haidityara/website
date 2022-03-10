import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chart from "../components/tokenomics/Chart";
import Loader from "../components/Loader";


const CalendarBody =  (calendar) => {
    const dateFieldLength = Object.keys(calendar[0]).length - 1;
    let html = ``;
    for (let i = 0; i < dateFieldLength; i++) {
        const key = Object.keys(calendar[i])[i];
        html += `<tr><td>${key}</td>`;
        calendar.map(item => {
            const key = Object.keys(item)[i];
            let percentage = "_";
            let colorText = "text-white";
            if (item[key] > 0){
                percentage = `${item[key]}<span class="percent">%</span>`;
                colorText = "text-green";
            } else if (item[key] < 0){
                percentage = `${item[key]}<span class="percent">%</span>`;
                colorText = "text-red";
            }

            html += `<td><span class="${colorText}">${percentage}</span></td>`;
        });
        html += `</tr>`;
    }
    return html;
}

export default function Dashboard({data, calendar}) {
    return (
        <>
            <Head>
                <title>T.E.A.M DAO</title>
            </Head>

            <Navbar/>

            <main id="stats">
                <div className="separator pt-5"/>
                <div className="radiant"/>
                <div className="container">
                    <div className="row">
                        <Chart
                            data={data}
                            dataKeyArea="PLAYERS"
                            dataKeyXAxis="DATE"
                            title="@TeamAXS PLAYERS"
                            count={data[data.length - 1].PLAYERS ? data[data.length - 1].PLAYERS : 0}
                        />
                        <Chart
                            data={data}
                            dataKeyArea="wTEAMS"
                            dataKeyArea2="wTEAMSb"
                            dataKeyXAxis="DATE"
                            title="wTEAMS"
                            count={data[data.length - 1].wTEAMS ? data[data.length - 1].wTEAMS : 0}
                            count2={data[data.length - 1].wTEAMSb ? data[data.length - 1].wTEAMSb : 0}
                        />
                        <Chart
                            data={data}
                            dataKeyArea="AXIES"
                            dataKeyXAxis="DATE"
                            title="AXIES"
                            count={data[data.length - 1].AXIES ? data[data.length - 1].AXIES : 0}
                        />
                        <Chart
                            data={data}
                            dataKeyArea="SLP"
                            dataKeyXAxis="DATE"
                            title="$SLP"
                            count={data[data.length - 1].SLP ? data[data.length - 1].SLP : 0}
                        />
                    </div>
                    {/*  calendar  */}
                    <div className="table-monthly returns card card-calendar">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead>

                                    <tr>
                                        <th width="120" className="th-title">wTEAM-roi</th>
                                        {
                                            calendar?.map((item, index) => {
                                                return (
                                                    <th width="120" key={index} scope="col">{item.Date}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                    </thead>
                                    <tbody dangerouslySetInnerHTML={{ __html: CalendarBody(calendar) }} />


                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <Footer/>
        </>
    );
}

Dashboard.getInitialProps = async function () {
    const res = await fetch('https://script.google.com/macros/s/AKfycbwUIWIyWNeR39-VT925Y58XeCGe_nOew0FKormhJPoFLJ5FoQLjbHPneRxJeDnf9aXA7Q/exec?action=stats');
    const stats = await res.json();

    const calenderResult = await fetch('https://script.google.com/macros/s/AKfycbwUIWIyWNeR39-VT925Y58XeCGe_nOew0FKormhJPoFLJ5FoQLjbHPneRxJeDnf9aXA7Q/exec?action=roi');
    const roi = await calenderResult.json();

    return {
        data: stats,
        calendar: roi
    }
};