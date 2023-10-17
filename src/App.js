import react, { useState } from 'react'
import {TbHexagonLetterO} from "react-icons/tb"
import {TbSquareKey} from "react-icons/tb"
import {MdKeyboardArrowRight} from "react-icons/md"
import {PiHandWaving} from "react-icons/pi"
import {BiDollarCircle} from "react-icons/bi"
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsDatabaseCheck} from "react-icons/bs"
import {RiAccountBoxLine} from "react-icons/ri"
import {PiHeadsetDuotone} from "react-icons/pi"
import {LuBadgePercent} from "react-icons/lu"
import { HiMenu, HiX } from "react-icons/hi";

import {TbHelpSquare} from "react-icons/tb"


import {
  Chart as ChartJS,
  ArcElement,
   BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import {AiOutlineArrowUp} from "react-icons/ai"
import {PiNotepadThin} from "react-icons/pi"
import {BiLockAlt} from "react-icons/bi"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"

import { Bar,Doughnut} from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,

)

function App() { 


const data = {
  labels:['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec', ],
  datasets: [
    {
      
      data:[0,0,0,0,0,0,0,8,0,0,0,0],
      backgroundColor:'#4F46E5',
      borderRadius:10,
      borderWidth:0,
    }
  ]
}

const options = {

}

  const [projects, setProjects] = useState(0)
  const [tab, setTab] = useState(0)

 
  const data1 = {
    labels: [
       
    ],
    datasets: [{
      label: ' ',
      data: [45, 100, 100],
      backgroundColor: [
        '#E879F9',
        '#7C3AED',
        'white'
      ],
      hoverOffset: 1
    }]
  };

  const textCenter = {
    id:'textCenter',
    beforeDatasetDraw(chart, args, pluginOptions){
      const{ctx,data} = chart;
      ctx.save();
      // ctx.font='bolder 20px sans-serif';
      // ctx.fillStyle='black';
      // ctx.textAlign='center';
      // ctx.fillText('65%  ',chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      const xcoor = chart.getDatasetMeta(0).data[0].x;
      const ycoor =  chart.getDatasetMeta(0).data[0].y;

      ctx.font = 'bold 20px sans-serif';
      ctx.fillStyle='black';
      ctx.textAlign='center';
      ctx.textBaseline = 'middle';
      ctx.fillText(  '65%',xcoor,ycoor -15 );

      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle='reblackd';
      ctx.textAlign='center';

      ctx.fillText('Total new', xcoor, ycoor -2);
      ctx.font = 'bold 10px sans-serif';
      ctx.fillStyle='black';
      ctx.textAlign='center';

      ctx.fillText('customers', xcoor, ycoor +8);

    }
    

  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  



  return (
    <div className="flex ">
          <div className='bg-indigo-900  pt-4  hidden sm:flex flex-wrap  ' style={{width: "220px",height:"900px" }}>
              <div className='  pl-4 pt-2 '> 
                <p className='flex text-white text-lg font-md pr-14 '>
                  <div className='mt-2 mr-2'>
                <TbHexagonLetterO className=''/>
                </div>
                      Dashboard
                  </p>
              </div>
              <div className="  mb-40 cursor-pointer font-medium text-base text-2xl  ml-2"> 
              
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 0 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  `} onClick={() => setProjects(0)}>
                  <TbSquareKey className='mt-1 mr-2'/>
                  Dashboard
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 1 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  mt-4 `} onClick={() => setProjects(1)}>
                  <TbSquareKey className='mt-1 mr-2'/>
                 Product
                  <MdKeyboardArrowRight className='  ml-16 mt-1'/>
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 2 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4  `} onClick={() => setProjects(2)}>
                  <RiAccountBoxLine className='mt-1 mr-2'/>
                Customers
                  <MdKeyboardArrowRight className='  ml-11 mt-1'/>
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 3 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4 `} onClick={() => setProjects(3)}>
                  <PiHeadsetDuotone className='mt-1 mr-2'/>
                Income
                  <MdKeyboardArrowRight className='  ml-16 mt-1'/>
                </p> 
                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 4 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                  <LuBadgePercent className='mt-1 mr-2'/>
                 Promote
                  <MdKeyboardArrowRight className='  ml-14 mt-1'/>
                </p>    

                <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 4 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                  <TbHelpSquare className='mt-1 mr-2'/>
                 Help
                  <MdKeyboardArrowRight className='  ml-20 mt-1'/>
                </p>

              </div>
              <div className='pl-2 flex cursor-pointer rounded-lg bg-opacity-40 w-48 h-12 ml-1  bg-indigo-300  pt-1  mb-60'>
                            <img src='./avatar.jpg' alt='Image Two' style={{ width: '25px', height: '25px', borderRadius: '50%', marginRight: '8px' }}className='' />
                            <div>
                              <p className='text-white text-sm '>Evano</p>
                              <p className=' text-gray-400 text-xs   '> Product&nbsp;Manager</p>
                            </div>
                            <MdKeyboardArrowRight className=' text-white mt-2 ml-4 '/>
                          </div>

                       
            </div>

        



<div className=''>
<div className="md:ml-0 sm:hidden flex sm:mr-16 mr-4 float-right">
                        <div onClick={toggleMobileMenu} className="text-black focus:outline-none">
                          {isMobileMenuOpen ? 
                            <HiX className="text-2xl" />
                          :
                            <HiMenu className="text-2xl" />
                          }
                        </div>
                      </div>
                      {isMobileMenuOpen && (
                      <div className="md:hidden mt-8 absolute z-40 w-[400px]  "style={{backgroundColor: " #312E81"}}>
                        <ul className="text-white p-4 py-8  ">
                          <li>
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 8 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  `} onClick={() => setProjects(0)}>
                            <TbSquareKey className='mt-1 mr-2'/>
                            Dashboard
                          </p> 
                          </li>
                          <li className="pt-8">
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 1 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  mt-4 `} onClick={() => setProjects(1)}>
                            <TbSquareKey className='mt-1 mr-2'/>
                          Product
                            <MdKeyboardArrowRight className='  ml-16 mt-1'/>
                          </p> 
                          </li>     
                          <li className="pt-8">
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 2 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4  `} onClick={() => setProjects(2)}>
                              <RiAccountBoxLine className='mt-1 mr-2'/>
                            Customers
                              <MdKeyboardArrowRight className='  ml-11 mt-1'/>
                            </p> 
                          </li>   
                          <li className="pt-8">
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 3 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex mt-4 `} onClick={() => setProjects(3)}>
                            <PiHeadsetDuotone className='mt-1 mr-2'/>
                          Income
                            <MdKeyboardArrowRight className='  ml-16 mt-1'/>
                          </p> 
                          </li> 
                          <li className="pt-8">
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 9 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} 48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                            <LuBadgePercent className='mt-1 mr-2'/>
                          Promote
                            <MdKeyboardArrowRight className='  ml-14 mt-1'/>
                          </p>
                                    </li>    
                          <li className="pt-8">
                          <p className={ `hover:bg-indigo-500  hover:text-white    ${projects === 4 ? "text-white bg-indigo-500 bg-opacity-40   rounded-lg" : "text-gray-400 hove:bg-indigo-500"} w-48 h-8 pl-2  py-1   flex  mt-4`} onClick={() => setProjects(4)}>
                            <TbHelpSquare className='mt-1 mr-2'/>
                          Help
                            <MdKeyboardArrowRight className='  ml-20 mt-1'/>
                          </p>
                          </li> 

                        </ul>
                        </div>
                      )}
                

          <div className= 'sm:flex justify-between   sm:w-[1100px] w-auto'>
                      <div className='flex ml-14 mt-8 b  '>
                      <p className='font-bold sm:ml-0 ml-20'>
                        Hello Sharhruk ,
                      </p>
                      <PiHandWaving className='   mt-1 '/> 


                      </div>
                      
                      <div className="flex w-22 rounded-full sm:ml-0 ml-40  ">
                                                  <div className="     ">
                                                    <AiOutlineSearch className=" text-gray-500 sm:mt-5 mt-1 sm:mr-2 mr-1 " />
                                                  </div>
                                                  <input 
                                                    type="search"
                                                    placeholder="Search..."
                                                    className="  "
                                                  />
                         </div>

</div>
            

    

              <div className=' mt-14 ml-8 sm:flex  px-20'>

                <div className='flex'>
                          <div className='  bg-blue-400 bg-opacity-30 rounded-full px-4 py-3'>
                          <BiDollarCircle className='w-14 h-14 mt-1  text-green-500'/>
                          </div>
                          <div className='ml-4'>
                            <p className='text-xs text-gray-400'>Earning</p>
                            <p className='font-bold text-sm'>$198k</p>
                            <p className='text-xs flex'><span className='text-green-600 font-bold text-xs flex'><AiOutlineArrowUp className=''/>37% </span>  this month</p>
                          </div>

                </div>

                <div className='flex sm:ml-8 ml-0 sm:mt-0 mt-4'>
                          <div className='  bg-pink-400 bg-opacity-30 rounded-full px-4 py-3'>
                          <PiNotepadThin className='w-14 h-14  mt-1  text-violet-500'/>
                          </div>
                          <div className='ml-4'>
                            <p className='text-xs text-gray-400'>Orders</p>
                            <p className='font-bold text-sm'>$2.4k</p>
                            <p className='text-xs flex'><span className='text-red-600 font-bold text-xs flex'><AiOutlineArrowDown/>2% </span>  this month</p>
                          </div>

                </div>

                <div className='flex sm:ml-8 ml-0 sm:mt-0 mt-4'>
                          <div className='  bg-blue-400 bg-opacity-30 rounded-full px-4 py-3'>
                          <BsDatabaseCheck className='w-14 h-14     text-blue-500'/>
                          </div>
                          <div className='ml-4'>
                            <p className='text-xs text-gray-400'>Balance</p>
                            <p className='font-bold text-sm'>$2.4k</p>
                            <p className='text-xs flex'><span className='text-red-600 font-bold text-xs flex'><AiOutlineArrowDown/>2% </span>  this month</p>
                          </div>

                </div>

                <div className='flex sm:ml-8 ml-0 sm:mt-0 mt-4'>
                          <div className='  bg-red-400 bg-opacity-30 rounded-full px-4 py-3'>
                          <BiLockAlt className='w-14 h-14    text-red-500'/>
                          </div>
                          <div className='ml-4'>
                            <p className='text-xs text-gray-400'>Total sales</p>
                            <p className='font-bold text-sm'>$89k</p>
                            <p className='text-xs flex sm:w-auto w-24  '><span className='text-green-600 font-bold text-xs flex '><AiOutlineArrowUp/>11% </span>this week</p>
                          </div>

                </div>


              </div>
              


        <div className=' sm:flex   h-[400px]'>


                <div className='mt-14   sm:ml-32 ml-0  sm:px-auto px-4   sm:w-[600px] w-[400px]  sm:h-[500px] h-[200px] ' >
                  <p className='font-bold sm:ml-0 ml-44'>Overview</p>
                  <div className='flex justify-between'>
                  <p className='text-xs text-gray-400'>Monthly Earnings</p>
                  <p className='text-xs text-gray-400 flex'>Quaterly <IoIosArrowDown className='mt-1 ml-2'/> </p>
 
                  </div>
                  <div>
                    <Bar className=' ' 
                    data = {data}
                    options = {options}
                    ></Bar>
                  </div>
                  
                
              </div>

              <div className='sm:mt-14 mt-20   sm:px-0 px-4 sm:w-[300px] w-[400px]  sm:h-[200px] h-[200px] '>

                 <div>
                 <p className='font-bold sm:ml-20 ml-36  '>Customers</p>
                 <p className='text-xs text-gray-400 flex sm:ml-10 ml-28 '>Customers that buy products</p>
                  </div>

                <Doughnut className='sm:ml-0 ml-20  '
               data={data1}
               plugins={[textCenter]}
               >
                 </Doughnut>
             </div>
     </div>

            


<div>
  <div className='  flex justify-between sm:w-[1000px] w-auto sm:ml-24 ml-0 sm:mt-0 mt-80'>
  <p className=' font-bold'>Product Sell</p>

  <div className='flex'>
                   <div className="flex w-22 rounded-full   sm:ml-auto ml-8  ">
                                                  <div className="mr-2  sm:mt-1 mt-4 sm:ml-0 ml-2 ">
                                                    <AiOutlineSearch className=" text-gray-500 " />
                                                  </div>
                                                  <input 
                                                    type="search"
                                                    placeholder="Search..."
                                                    className="  "
                                                  />
                   </div>
                  <p className='text-xs text-gray-400 flex'>Last 30 days <IoIosArrowDown className='mt-1 ml-2'/> </p>

                  </div>

    
  </div>
                 
</div>




<div>

  <div className=' sm:w-[1000px] w-[auto]'>

    <table className='  w-full mt-10  sm:ml-20 ml-0'>
      <thead>
        <tr>
        <th   className='text-gray-300 text-left pl-4'> Product name</th> 
        <th className='text-gray-300 ' style={{ width: '10%' }}> Stock</th>
        <th className='text-gray-300 'style={{ width: '10%' }}>  Price</th>
        <th className='text-gray-300'style={{ width: '20%' }}> Total Sales</th>
        </tr>
       
      </thead>
      
      <tbody>
                <tr>
                     
                    <td>
                        <div className='pl-2 flex cursor-pointer   ml-1  pt-1 '>
                            <img src='./w2.jpg' alt='Image Two' style={{ width: '80px', height: '30px' , marginRight: '8px' }} className='rounded-lg' />
                            <div>
                                <p className='text-black-500 font-bold text-sm'>Abstract 3D</p>
                                <p className='text-gray-400 text-xs pb-2 sm:w-auto w-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </td>
                    <td  className='text-center   '>32&nbsp;in stock </td>
                    <td  className='text-center sm:pl-auto pl-2 '>$&nbsp;45.99</td>
                    <td  className='text-center '> 20</td>

                   
                </tr>
            
            </tbody>
            <tbody>
                <tr>
                     
                    <td>
                        <div className='pl-2 flex cursor-pointer    ml-1   pt-1 '>
                            <img src='./w1.jpg' alt='Image Two' style={{ width: '80px', height: '30px',   marginRight: '8px' }} className='rounded-lg' />
                            <div>
                                <p className='text-black-500 text-sm font-bold'> Sarpents illustration</p>
                                <p className='text-gray-400 text-xs pb-2 sm:w-auto w-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-center'>32 in stock </td>
                    <td  className='text-center'>$ 45.99</td>
                    <td  className='text-center'> 20</td>

                   
                </tr>
   
            </tbody>
    </table>
  </div>
</div>


  
</div>




 


  
    </div>
  );
}

export default App;
