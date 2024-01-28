"use client" 
// import { Line , LineChart, XAxis} from "recharts"
import ReactApexChart from 'react-apexcharts';
// const data = [
//     { name: "2017", react: 0, angular: 37, vue: 160 },
//     { name: "2018", react: 82,  angular: 42, vue: 54 },
//     { name: "2019", react: 51, angular: 41, vue: 54 },
//     { name: "2020", react: 160, angular: 37, vue: 28 },
//     { name: "2021", react: 51, angular: 31, vue: 27 },
//     { name: "2022", react: 95,  angular: 44, vue: 149 },
// ];
const datas = {
    series: [{
        name: "Properties",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    
  
  
  };
const series : any = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  }
const Graph = () => {
  const isWindowExist = typeof window !== "undefined"
 
  
  return (
    isWindowExist == false ?
    <>waiting</>
    : 
    <div className='mt-7 h-fit'>
        <div>Market Value Projection</div>
        <div className='flex justify-between mt-5'>
            <div className='flex flex-col gap-1'>
                <p className='text-lightGray'>Rent estimate</p>
                <p className=''> <span className='text-xl font-semibold'>$12,000</span>   /month</p>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-lightGray'>Estimated sales range</p>
                <p className='text-xl font-semibold'>$4,068,000 - $5,117,000</p>
            </div>
            <div className='w-fit py-1  px-4 bg-white rounded-lg my-auto border  border-gray-400  '>
                This month
            </div>

        </div>
        
        {/* <LineChart data={data} className="w-full h-[60vh] mt-12" width={700} height={400} >
            <Line type={"monotone"} dataKey={"react"} strokeWidth={3} stroke="rgb(71 132 196)" />
            <XAxis dataKey={"name"}  />
        </LineChart> */}

        <div className="w-full mt-12">
            <ReactApexChart  width={"100%"} options={series} series={datas.series} type="line" height={350} />
        </div>
        
    </div>
  )
}

export default Graph