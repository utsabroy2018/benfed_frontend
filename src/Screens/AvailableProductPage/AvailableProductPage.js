import React from 'react'
import AvailableProduct from '../../Components/AvailableProduct'
import RightSidebarGlobal from '../../Components/RightSidebarGlobal'

function AvailableProductPage() {
  return (

    <>

    <div class="wrapper">
        <div class="inner_page_Sec">
        <div class="col-sm-8 float-left left_sec_table searchPageTop">
    
        <h1>Available Product</h1>
    
        <AvailableProduct/>
    
    
    
        </div>
        <div class="col-sm-4 float-left">
        <RightSidebarGlobal/>
        </div>
    
        </div>
        </div>
    
          {/* <DefaultPage pageTitle={pageContentData.pageTitle} pageContent = {pageContentData.pageContent} /> */}
        </>
   
  )
}

export default AvailableProductPage