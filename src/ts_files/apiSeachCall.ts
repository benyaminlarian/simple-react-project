import axios from "axios";

function apiSearchCall(key:string,url:string,query:string | any,page:number,setRes:Function,setTotalPage:Function){
    axios.get(
        url, {
            params: {
                api_key: key,
                page: page,
                query: query
            }
        }
    ).then(
        res=>{setRes(res.data['results'])
            setTotalPage(res.data['total_pages'])
             console.log(res.data)}
    ).catch(err=>console.log(err))
}

export default apiSearchCall;