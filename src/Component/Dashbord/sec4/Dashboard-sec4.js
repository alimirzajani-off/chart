import React, { useState, useRef, useEffect } from 'react'
import moment from 'jalali-moment'
import './Dashboard-sec4.css'
const DashboardSec4 = () => {
    const [Data, setData] = useState([])
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
        setData(data.transaction)
    }
    const renderList = () => {
        return Data.map(item => {
            return (
                <tr>
                    <td><i class="far fa-calendar"></i>{moment(item.date, 'YYYY/MM/DD').locale('fa').format('jYYYY/jMM/jDD')}</td>
                    <td><i class="fas fa-money-bill"></i>{item.price}</td>
                    <td style={{color:"#47C954"}}><i class="fas fa-circle" style={{color:"#47C954"}}></i>{item.title}</td>
                    <td><i class="fas fa-money-bill"></i>{item.promoname}</td>
                    <td><i class="fas fa-money-bill"></i>{item.installmentamount} ریال</td>
                </tr>
            )
        })
    }

    return (
        <div className="d-sec4">
            <h4 className="text-end p-2 pr-2">تراکنش های اخیر</h4>
            <table>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardSec4