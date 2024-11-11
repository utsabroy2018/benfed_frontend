import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';




function TestPage() {
  return (
    <div>

test

<PieChart
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



{/* <Sidebar 
        // pageWrapId={'page-wrap'} 
        // outerContainerId={'App'} 
        width={'24em'}
        //menu={'left'}
        /> */}
    </div>
  )
}

export default TestPage