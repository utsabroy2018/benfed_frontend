import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { BASE_BENFED_URL } from '../../routes/config';
import Loader from '../../Components/Loader';



function TestPage({rowCounter, pagination}) {

  const [getAvailablePro, setAvailablePro] = useState('');
  const [loadingPro, setLoadingPro] = useState(true);

  const fetchAvailablePro = ()=>{
    axios.post(`${BASE_BENFED_URL}/f_stock_api`,
    // axios.post(`https://benfed.in/benfed_godown/index.php/api/f_getvendor`,	
    {
      auth_key:"xxxxx",
    }
    // ,
    // {
    //     headers: {
    //         Authorization: loginData.token,
    //     },
    // }
    ).then(res => {
  
      
      
  
      if(res.status == '200'){
  
      console.log(res.status, 'dddddddeeeddgggdddd');
      setAvailablePro(res?.data?.value);
      setLoadingPro(false);
      
      // if(res.data.suc > 0){
      // // set here
      // // setLoading(false);
  
      // } else {
      // setAvailablePro([])
      // // pageDataCheck = res.data.status;
      // }
  
      }
  
    }) 
  
    }

  const columns = [
    {
      title: 'District Name',
      // district_name
      dataIndex: 'district_name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.district_name - b.district_name,
      // showSorterTooltip: {
      // target: 'full-header',
      // },
      // filters: [
      //   {
      //     text: 'Joe',
      //     value: 'Joe',
      //   },
      //   {
      //     text: 'Jim',
      //     value: 'Jim',
      //   },
      //   {
      //     text: 'Submenu',
      //     value: 'Submenu',
      //     children: [
      //       {
      //         text: 'Green',
      //         value: 'Green',
      //       },
      //       {
      //         text: 'Black',
      //         value: 'Black',
      //       },
      //     ],
      //   },
      // ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ['descend'],
    },
    {
      title: 'Company Name',
      // comp_name
      dataIndex: 'comp_name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.comp_name - b.comp_name,
    },
    {
      title: 'Product Details',
      // prod_desc
      dataIndex: 'prod_desc',
      sorter: (a, b) => a.prod_desc - b.prod_desc,
  
      // filters: [
      //   {
      //     text: 'London',
      //     value: 'London',
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York',
      //   },
      // ],
      // onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Stock Quantity',
      // prod_desc
      dataIndex: 'stock_qty',
      sorter: (a, b) => a.stock_qty - b.stock_qty,
  
      // filters: [
      //   {
      //     text: 'London',
      //     value: 'London',
      //   },
      //   {
      //     text: 'New York',
      //     value: 'New York',
      //   },
      // ],
      // onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  useEffect(()=>{
    fetchAvailablePro();

    console.log(getAvailablePro, 'dddddfffffffddddgggdddd');
    },[])

  return (
    <>
    {loadingPro ?(
		<Loader align = {'center'} gap = {'middle'} size = {'large'} />
		):(
      <>

      <Table
    columns={columns}
    dataSource={getAvailablePro.slice(0, rowCounter)}
    onChange={onChange}
    showSorterTooltip={{
      target: 'sorter-icon',
    }}
    pagination={pagination} 
  />
      </>
    
    )}
    

</>

  )
}

export default TestPage