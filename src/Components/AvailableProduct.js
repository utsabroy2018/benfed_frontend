import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import axios from 'axios';
import { BASE_BENFED_URL } from '../routes/config';
import Loader from './Loader';

function AvailableProduct({ rowCounter, pagination, searchShow }) {
  const [getAvailablePro, setAvailablePro] = useState([]);
  const [loadingPro, setLoadingPro] = useState(true);
  const [searchText, setSearchText] = useState(''); // State to hold search text
  // const [searchTextProduct, setSearchTextProduct] = useState(''); // State to hold search text
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  searchShow = true;

  const fetchAvailablePro = () => {
    axios
      .post(`${BASE_BENFED_URL}/f_stock_api`, {
        auth_key: 'xxxxx',
      })
      .then((res) => {
        if (res.status === 200) {
          setAvailablePro(res?.data?.value);
          setFilteredData(res?.data?.value); // Initialize filteredData
          setLoadingPro(false);
        }
      });
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = getAvailablePro.filter((item) =>
      item.district_name.toLowerCase().includes(value) || item.prod_desc.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  // const handleSearchProduct = (e) => {
  //   const value = e.target.value.toLowerCase();
  //   setSearchTextProduct(value);
  //   const filtered = getAvailablePro.filter((item) =>
  //     item.prod_desc.toLowerCase().includes(value)
  //   );
  //   setFilteredData(filtered);
  // };

  const columns = [
    {
      title: 'District Name',
      dataIndex: 'district_name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.district_name.localeCompare(b.district_name),
    },
    {
      title: 'Company Name',
      dataIndex: 'comp_name',
      sorter: (a, b) => a.comp_name.localeCompare(b.comp_name),
    },
    {
      title: 'Product Details',
      dataIndex: 'prod_desc',
      sorter: (a, b) => a.prod_desc.localeCompare(b.prod_desc),
    },
    {
      title: 'Stock Quantity',
      dataIndex: 'stock_qty',
      sorter: (a, b) => a.stock_qty - b.stock_qty,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  useEffect(() => {
    fetchAvailablePro();
  }, []);

  return (
    <>
      {loadingPro ? (
        <Loader align="center" gap="middle" size="large" />
      ) : (
        <>
        {searchShow &&(
          <div className='search_district'>
          {/* <label>Search: </label> */}
          <Input
            placeholder="Search District Or Product"
            value={searchText}
            onChange={handleSearch}
            style={{ width: '300px' }}
          />
     
          </div>
        )}
        
          <Table
            columns={columns}
            dataSource={filteredData.slice(0, rowCounter)}
            onChange={onChange}
            showSorterTooltip={{
              target: 'sorter-icon',
            }}
            pagination={pagination}
          />
        </>
      )}
    </>
  );
}

export default AvailableProduct;
