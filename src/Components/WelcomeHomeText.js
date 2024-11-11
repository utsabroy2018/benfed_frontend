import React from 'react'
import { Link } from 'react-router-dom';

function WelcomeHomeText() {

  return (
    <>
    <h1>Welcome to  <span>BENFED</span> </h1>
		<p>West Bengal State Cooperative Marketing Federation Ltd. popularly known as BENFED has been registered under WBCS Act 1940. At the time of registration in 1958 the name of the organization was West Bengal Apex Cooperative Marketing Society Ltd. Trade name BENFED come into existence in the year 1976.</p>

<p>BENFED is the federation of block level cooperative Marketing and 
	Processing Societies. Marketing Societies belongs to A class category of 
	members and the Processing Societies are B class members.</p>
    <Link to="/about">Read More &gt;&gt;</Link>
    </>
  )
}

export default WelcomeHomeText