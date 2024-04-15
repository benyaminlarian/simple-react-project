import axios from "axios";

function apiDetailsCall(key:string,url:string,setRes:Function){
    axios.get(
        url, {
            params: {
                api_key: key,
            }
        }
    ).then(
        res=>{setRes(res.data)
             console.log(res.data)}
    ).catch(err=>console.log(err))
}

export default apiDetailsCall;