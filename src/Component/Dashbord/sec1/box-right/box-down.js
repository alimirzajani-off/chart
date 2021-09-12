import React,{useState,useEffect,useRef} from 'react'

const BoxDown = (props) => {

    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            funcName();
        }
        mounted.current = true;
    }, [])

    const [Dash1, setDash1] = useState([])
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
        setDash1(data.statistics.installment)
    }
    return (
        <div className="sb-box">
            <span>
                <h4>فروش یک ماه گذشته</h4>
                <p style={{color:"#739EC4"}}>{Dash1}ریال</p>
            </span>
        </div>
    )
}

export default BoxDown