import fetch from 'node-fetch'
import {formatUrl} from './formatUrl'

export interface SaveRequest{
    title:string
    linktype:number
    collectsite:string
    org_url:string
    org_ishot:number
    org_category:string
    redirecturl:string
    activeprice:string
    activityid?:string
    prodescription?:string
    originprice?:string
    org_image:string
    description:string
    endtime?:string
}

const getUrl=async(url:string)=>{
    const response = await fetch(url, {
        redirect: 'follow', // 设置重定向： 'follow', 'error' 或 'manual'
        follow: 100          // 最大重定向次数
    })
    if(response.ok){
        const res:{status:number,data:string} =await formatUrl(response.url)
        if(res.status!==1){
            throw new Error(`Not support url`);
        }
        return res.data
    }
    throw new Error(`HTTP error! status: ${response.status}`);
}

getUrl("https://go.smzdm.com/e4e0c33c0c288c49/cb_aa_ht_131_101293840_15201_1107_143_0").then(v=>{console.log(v)})
