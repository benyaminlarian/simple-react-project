import axios from "axios";

function apiCall(key:string,url:string,page:number,setRes:Function,setTotalPage:Function){
    axios.get(
        url, {
            params: {
                api_key: key,
                page: page,
            }
        }
    ).then(
        res=>{setRes(res.data['results'])
              setTotalPage(res.data['total_pages'])
             console.log(res.data)}
    ).catch(err=>console.log(err))
}

export default apiCall;