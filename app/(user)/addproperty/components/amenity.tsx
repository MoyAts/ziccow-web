import React from 'react'
import { PropertyDetailInf } from './interface';
import { CgAdd } from 'react-icons/cg';
interface Props{
  setForm: Function;
  form: PropertyDetailInf;
}

const Amenity = ({ setForm, form } : Props) => {

  const addBedroom = (ind : 0 | 1 | 2 | 3 | 4)=>{
    setForm((form : any) => {
      let d = [...form["bedroom"+ind],""]
      if(d.length >= 5){
        return form
      }
      return {...form,["bedroom"+ind] : d}
    })
  }
  const updateBedroom = (ind : 0 | 1 | 2 | 3 | 4,ind2 : number,value : any)=>{
    setForm((form : any) => {
      let d = [...form["bedroom"+ind]]
      d[ind2] = value
      console.log(d,value)
      return {...form,["bedroom"+ind] : d}
    })
  }
  const add = (value : string)=>{
    setForm((form : any) => {
      let d = [...form[value],""]
      if(d.length >= 5){
        return form
      }
      return {...form,[value] : d}
    })
  }
  const update = (ty : string,ind : number,value : any)=>{
    setForm((form : any) => {
      let d = [...form[ty]]
      d[ind] = value
      return {...form,[ty] : d}
    })
  }
  return (
    <div className='w-full my-5'>
      
      <div className='w-full flex flex-col gap-2 bg-white rounded-lg border p-2'>
        <div>Bed Room</div>

        <div className='grid grid-cols-2 gap-4'>
          
          <div className='flex flex-col  ps-5'>
              <div className='flex gap-5'>
                <div className=''>Studio</div>
                <button 
                  onClick={()=>addBedroom(0)}
                  className='my-auto'
                >
                  {<CgAdd />}
                </button>
              </div>
              {form.bedroom0.map((val,ind)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='border w-32 py-1 px-2' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        updateBedroom(0,ind,target.value)
                      }}
                      value={val}
                    />
                  </div>
              ))}
              
            </div>

          <div className='flex flex-col  ps-5'>
            <div className='flex gap-5'>
              <div className=''>1 Bed room</div>
              <button 
                onClick={()=>addBedroom(1)}
                className='my-auto'
              >
                {<CgAdd />}
              </button>
            </div>
            {form.bedroom1.map((val,ind)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='border w-32 py-1 px-2' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(1,ind,target.value)
                    }}
                    value={val}
                  />
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  ps-5'>
            <div className='flex gap-5'>
              <div className=''>2 Bed room</div>
              <button 
                onClick={()=>addBedroom(2)}
                className='my-auto'
              >
                {<CgAdd />}
              </button>
            </div>
            {form.bedroom2.map((val,ind)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='border w-32 py-1 px-2' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(2,ind,target.value)
                    }}
                    value={val}
                  />
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  ps-5'>
            <div className='flex gap-5'>
              <div className=''>3 Bed room</div>
              <button 
                onClick={()=>addBedroom(3)}
                className='my-auto'
              >
                {<CgAdd />}
              </button>
            </div>
            {form.bedroom3.map((val,ind)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='border w-32 py-1 px-2' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(3,ind,target.value)
                    }}
                    value={val}
                  />
                </div>
            ))}
            
          </div>

          <div className='flex flex-col  ps-5'>
            <div className='flex gap-5'>
              <div className=''>4 Bed room</div>
              <button 
                onClick={()=>addBedroom(4)}
                className='my-auto'
              >
                {<CgAdd />}
              </button>
            </div>
            {form.bedroom4.map((val,ind)=>(
                <div key={ind} className='flex gap-5 ps-5 mt-2'>
                  <div className='my-auto'>Type {ind + 1}</div>
                  <input 
                    type="text" 
                    className='border w-32 py-1 px-2' 
                    placeholder='Area in M2' 
                    onChange={({target}:any) =>{
                      updateBedroom(4,ind,target.value)
                    }}
                    value={val}
                  />
                </div>
            ))}
            
          </div>

        </div>
      </div>

      <div className='w-full flex flex-col gap-2 bg-white rounded-lg border p-2'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
              <div className='flex gap-5'>
                <div className=''>Shop</div>
                <button 
                  onClick={()=>add("shop")}
                  className='my-auto'
                >
                  {<CgAdd />}
                </button>
              </div>
              {form.shop.map((val,ind)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='border w-32 py-1 px-2' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        update("shop",ind,target.value)
                      }}
                      value={val}
                    />
                  </div>
              ))}
              
            </div>
        </div>
      
      </div>

      <div className='w-full flex flex-col gap-2 bg-white rounded-lg border p-2'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col'>
              <div className='flex gap-5'>
                <div className=''>Circulation</div>
                <button 
                  onClick={()=>add("circulation")}
                  className='my-auto'
                >
                  {<CgAdd />}
                </button>
              </div>
              {form.circulation.map((val,ind)=>(
                  <div key={ind} className='flex gap-5 ps-5 mt-2'>
                    <div className='my-auto'>Type {ind + 1}</div>
                    <input 
                      type="text" 
                      className='border w-32 py-1 px-2' 
                      placeholder='Area in M2' 
                      onChange={({target}:any) =>{
                        update("circulation",ind,target.value)
                      }}
                      value={val}
                    />
                  </div>
              ))}
              
            </div>
        </div>
      
      </div>
      
    
    </div>
  )
}

export default Amenity
