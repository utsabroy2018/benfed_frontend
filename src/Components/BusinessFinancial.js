import React, { useState } from 'react'
import axios from 'axios'
import { ADDRESSES } from '../routes/addresses'
import { useEffect } from 'react'
import { BASE_URL } from "../routes/config";
import { PieChart } from '@mui/x-charts';

function BusinessFinancial(
    {
    wordCount
    }
) {

  const [getBusinessFinancialData, setBusinessFinancialData] = useState([]);

  const fetchdata = ()=>{

    axios.post(`${BASE_URL}/wapi/getdoclist`,
   {
     auth_key:"xxxxx",
     doc_type: 3
   }
   // ,
   // {
   //     headers: {
   //         Authorization: loginData.token,
   //     },
   // }
   ).then(res => {

    if(res.status == '200'){
       
       if(res.data.suc > 0){
        setBusinessFinancialData(res?.data?.msg);
          //  setPageTitle(res.data.title);
          //  setFolderLocation(res?.data?.folder_name)
           // setFolderLocation()
           console.log(res , 'uuuuuuuuuuuuuuuuuuuuuu', res?.data?.msg);
  
           // pageDataCheck = res.data.status;
       } else {
        //  setPageData([0])
         setBusinessFinancialData([0])
         // pageDataCheck = res.data.status;
       }
  
       }
  
   }) 
  
  }

   function limitWords(content, wordLimit) {
    const words = content?.split(' ');
    if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
    }
    return content;
    }




   useEffect(()=>{
    fetchdata();
   },[])

    // const gstSettings = await handleGetGst();

  return (
    <>

<div className="statistic">
    <h2>Business Financial Year 2024-25</h2>
	<div className="statistic_left">

  

<div className={`bar_box bar_green bar_green`}>
    Purchase     <span> 200 M.T.
    {/* {loading_statis ?(
    <Loader align = {'center'} gap = {'middle'} size = {'small'} />
    ):(
    <>
    {getOngoingData?.length}
    </>
    )} */}

    </span>
    </div>
    <div className={`bar_box bar_green bar_yellow`}>
    Sale     <span> 15.5 M.T.
    {/* {loading_statis ?(
    <Loader align = {'center'} gap = {'middle'} size = {'small'} />
    ):(
    <>
    {getCompletData?.length}
    </>
    )} */}
    </span>
    </div>
   
    </div>

    <div className="statistic_right">
  <PieChart
  colors={['#e6b12e', '#6694c6', '#5ec384']} // Use palette
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
		
    
	</div>

    </div>

    {/* {getBusinessFinancialData?.map(item=> */}
    
    {/* {limitWords(item?.doc_title, wordCount)} */}
    
    {/* )} */}
    </>
  )
}

export default BusinessFinancial