import React, { useState, useRef, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';



const BoxCenter = () => {
    const data = {
        labels: null,
        datasets: [
            {
                data: null,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const [chartActive_label, setchartActive_label] = useState([])
    const [chartActive_data, setchartActive_data] = useState([])
    const [chartdisActive_label, setchartdisActive_label] = useState([])
    const [chartdisActive_data, setchartdisActive_data] = useState([])
    const [Active, setActive] = useState(true)
    const [disActive, setdisActive] = useState()

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
        setchartActive_label(data.salespromoprice.map(item => item.key))
        setchartActive_data(data.salespromoprice.map(item => item.value))
        setchartdisActive_label(data.salespromopriceInActive.map(item => item.key))
        setchartdisActive_data(data.salespromopriceInActive.map(item => item.value))
    }
    if (Active) {
        data.labels = chartActive_label;
        data.datasets.push({ data: chartActive_data })
    } else if (disActive) {
        data.labels = chartdisActive_label;
        data.datasets.push({ data: chartdisActive_data })
    } 
    if(Active&&disActive){
        data.labels = chartActive_label.concat(chartdisActive_label)
        const realData=chartActive_data.concat(chartdisActive_data)
        data.datasets.push({ data: realData })
        
    }

    const handleActive = (e) => {
        const status = e.target.checked
        setActive(status)
    }
    

    const handledisActive = (e) => {
        const status = e.target.checked
        setdisActive(status)

    }

    return (
        <>
            <h6>آمار فروش بر مبنای قیمت</h6>
            {data.labels == null && data.datasets.data == null ?
                <div className="text-center">موردی یافت نشد</div> :
                <div>
                    <Doughnut data={data} width={150} height={200}/>
                </div>
            }

            <div className="checkbox-group">
                <input id="checkbox1-box1" type="checkbox" onChange={e => handleActive(e)} defaultChecked={true} />
                <label htmlFor="checkbox1-box1">فروش به تفکیک تعداد پیشنهاد های فعال</label>
                <br />
                <input id="checkbox2-box1" type="checkbox" onChange={e => handledisActive(e)}/>
                <label htmlFor="checkbox2-box1">فروش به تفکیک تعداد پیشنهاد های غیر فعال</label>
            </div>
        </>
    )
}

export default BoxCenter