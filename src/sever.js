import axios from 'axios'
var headers = new Headers();
headers.append('Accept', 'application/json, */*');
headers.append('Content-Type','application/grpc');
headers.append('Authorization','Bearer accesstoken11_25_1');
fetch('https://api.ghesti.cards/Merchant/dashboard', {
    method: 'GET',
    headers: headers
});
export default axios.create({
    baseURL:'https://api.ghesti.cards/merchant/dashboard',
    headers:{
        'Content-Type':'application/grpc',
        'Authorization':'Bearer accesstoken11_25_1'
    }
})