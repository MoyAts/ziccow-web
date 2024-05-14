import React from 'react'
import { PropertyDetailInf } from './interface';
import { IoMdAdd } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import CustomeInput from '@/app/_components/customeInput';
import { Amenity } from '@/app/(user)/addproperty/components/interface';

interface Props{
    setAmenityNewData: Function;
    amenityNewData: any;
}

const AmenityEdit = ({ setAmenityNewData, amenityNewData } : Props) => {
 
  const addBedroom = (ind : 0 | 1 | 2 | 3 | 4)=>{
    setAmenityNewData((data : any) => {
      let d = [...data["bedroom"+ind],""]
      if(d.length >= 5){
        return d
      }
      console.log({...d,["bedroom"+ind] : d})
      return {...data,["bedroom"+ind] : d}
    })
  }
  const updateBedroom = (ind : 0 | 1 | 2 | 3 | 4,ind2 : number,value : any)=>{
    setAmenityNewData((form : any) => {
      let d = [...form["bedroom"+ind]]
      d[ind2] = value
      console.log(d,value)
      return {...form,["bedroom"+ind] : d}
    })
  }
  const add = (value : string)=>{
    setAmenityNewData((form : any) => {
      let d = [...form[value],""]
      if(d.length >= 5){
        return form
      }
      return {...form,[value] : d}
    })
  }
  const update = (ty : string,ind : number,value : any)=>{
    setAmenityNewData((form : any) => {
      let d = [...form[ty]]
      d[ind] = value
      return {...form,[ty] : d}
    })
  }

  const deleteBedroom = (num : number,ind : number) => {
    setAmenityNewData((form : any) => {
      let data = form["bedroom"+num].filter((_:any,i :number)=> i != ind)
      if(data.length == 0){
        data = ['']
      }
      return {...form,["bedroom"+num] : data}
    })
  }
  const deleteShop = (ind : number) => {
    setAmenityNewData((form : any) => {
      let data = form.shop.filter((_:any,i :number)=> i != ind)
      if(data.length == 0){
        data = ['']
      }
      return {...form,shop : data}
    })
  }
  const deleteCirculation= (ind : number) => {
    setAmenityNewData((form : any) => {
      let data = form.circulation.filter((_:any,i :number)=> i != ind)
      if(data.length == 0){
        data = ['']
      }
      return {...form,circulation : data}
    })
  }

  return (
    <div className='w-full my-5 flex flex-col gap-3'>
      
      <div className='w-full flex flex-col gap-2  rounded-lg '>
        <div className='font-semibold'>Home Type</div>
        <div className='grid grid-cols-2  max-mobile:grid-cols-1 gap-4'>
          
          <div className='flex flex-col bg-white ps-5 border p-1 rounded-lg'>
              <div className='flex gap-5'>
                <div className=''>Studio</div>
                <button 
                  onClick={()=>addBedroom(0)}
                  className='my-auto'
                >
                  {<IoMdAdd />}
                </button>
              </div>
              {amenityNewData.bedroom0.map((val : any,ind : any)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto text-sm'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg ' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        updateBedroom(0,ind,target.value)
                      }}
                      value={val}
                    />
                     { 
                    (ind > 0 || val.length > 0) && 
                      <button onClick={()=>deleteBedroom(0,ind)}>
                          {<IoCloseOutline className='text-red-800' />}
                      </button>
                    }
                   
                  </div>
              ))}
              
            </div>

          <div className='flex flex-col  bg-white ps-5 border p-1 rounded-lg'>
            <div className='flex gap-5'>
              <div className=''>1 Bed room</div>
              <button 
                onClick={()=>addBedroom(1)}
                className='my-auto'
              >
                {<IoMdAdd />}
              </button>
            </div>
            {amenityNewData.bedroom1.map((val : any,ind : any)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto text-sm'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg ' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(1,ind,target.value)
                    }}
                    value={val}
                  />
                  { 
                  (ind > 0 || val.length > 0) && 
                    <button onClick={()=>deleteBedroom(1,ind)}>
                        {<IoCloseOutline className='text-red-800' />}
                    </button>
                  }
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  bg-white ps-5 border p-1 rounded-lg'>
            <div className='flex gap-5'>
              <div className=''>2 Bed room</div>
              <button 
                onClick={()=>addBedroom(2)}
                className='my-auto'
              >
                {<IoMdAdd />}
              </button>
            </div>
            {amenityNewData.bedroom2.map((val : any,ind : any)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto text-sm'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg ' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(2,ind,target.value)
                    }}
                    value={val}
                  />
                  { 
                  (ind > 0 || val.length > 0) && 
                    <button onClick={()=>deleteBedroom(2,ind)}>
                        {<IoCloseOutline className='text-red-800' />}
                    </button>
                  }
                  
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  bg-white ps-5 border p-1 rounded-lg'>
            <div className='flex gap-5'>
              <div className=''>3 Bed room</div>
              <button 
                onClick={()=>addBedroom(3)}
                className='my-auto'
              >
                {<IoMdAdd />}
              </button>
            </div>
            {amenityNewData.bedroom3.map((val : any,ind : any)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto text-sm'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg ' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(3,ind,target.value)
                    }}
                    value={val}
                  />
                  { 
                  (ind > 0 || val.length > 0) && 
                    <button onClick={()=>deleteBedroom(3,ind)}>
                        {<IoCloseOutline className='text-red-800' />}
                    </button>
                  }
                  
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  bg-white ps-5 border p-1 rounded-lg'>
            <div className='flex gap-5'>
              <div className=''>4 Bed room</div>
              <button 
                onClick={()=>addBedroom(4)}
                className='my-auto'
              >
                {<IoMdAdd />}
              </button>
            </div>
            {amenityNewData.bedroom4.map((val : any,ind : any)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto text-sm'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg ' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(4,ind,target.value)
                    }}
                    value={val}
                  />
                  { 
                  (ind > 0 || val.length > 0) && 
                    <button onClick={()=>deleteBedroom(4,ind)}>
                        {<IoCloseOutline className='text-red-800' />}
                    </button>
                  }
                  
                </div>
            ))}
            
          </div>

        </div>
      </div>

      <div className='w-full flex flex-col gap-2 '>
        <div className='font-semibold'>Shop</div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col bg-white rounded-lg border p-2'>
              <div className='flex gap-5'>
                <div className=''>Shop</div>
                <button 
                  onClick={()=>add("shop")}
                  className='my-auto'
                >
                  {<IoMdAdd />}
                </button>
              </div>
              {amenityNewData.shop.map((val : any,ind : any)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto text-sm'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        update("shop",ind,target.value)
                      }}
                      value={val}
                    />
                     { 
                    (ind > 0 || val.length > 0) && 
                      <button onClick={()=>deleteShop(ind)}>
                          {<IoCloseOutline className='text-red-800' />}
                      </button>
                    }
                  
                  </div>
                  
              ))}
              
            </div>
           
        </div>
      
      </div>
      
      <CustomeInput
          value={amenityNewData.circulation}
          onChange={({ target } : any)=>{
            setAmenityNewData((d : any) => ({...d,"circulation"  : target.value}))
          }}
          label="Circulation"
          name={"locationDetail"}
          placeholder="Circulation"
          divClass="mb-5"
      />

      {/* <div className='w-full flex flex-col gap-2 '>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
              <div className='flex gap-5'>
                <div className=''>Circulation</div>
                <button 
                  onClick={()=>add("circulation")}
                  className='my-auto'
                >
                  {<IoMdAdd />}
                </button>
              </div>
              {form.circulation.map((val : any,ind : any)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto text-sm'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='outline-none text-gray-600 text-[15px] border w-32 py-1 px-2 rounded-lg' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        update("circulation",ind,target.value)
                      }}
                      value={val}
                    />
                     { 
                      (ind > 0 || val.length > 0) && 
                        <button onClick={()=>deleteCirculation(ind)}>
                            {<IoCloseOutline className='text-red-800' />}
                        </button>
                    }
                  
                  </div>
              ))}
              
            </div>
        </div>
      
      </div> */}
      
    
    </div>
  )
}

export default AmenityEdit
