import React, { useState, useRef, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import './Dashboard-sec3.css'


const DashboardSec3 = () => {

    const [chart_label, setchart_label] = useState([])
    const [chart_data, setchart_data] = useState([])

    const data = {
        labels: null,
        datasets: [
            {
                data: null,
                fill: true,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            funcName();
        }
        mounted.current = true;
    }, [])

    var headers = new Headers();
    headers.append('Accept', 'application/json, */*');
    headers.append('Content-Type', 'application/grpc');
    headers.append('Authorization', 'Bearer accesstoken11_25_1');

    async function funcName() {
        const url = 'https://api.ghesti.cards/Merchant/dashboard'
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        var data = await response.json();
        console.log(data);
        setchart_label(data.salesmonth.map(item => item.key))
        setchart_data(data.salesmonth.map(item => item.value))
    }

    data.datasets.push({ data: chart_data })
    data.labels = chart_label;

    return (
        <div className="d-sec3 d-flex">
              <div>
            <h4 className="text-end p-2 pr-2">روند تسویه های آینده به تفکیک ماه</h4>
        </div>
        <div>
            <Line data={data} options={options} height={350} width={0.1} />
        </div>
        </div>
    )
}

export default DashboardSec3