"use client" 
import Image from "next/image"; 
import Link from "next/link";
import React from 'react';
import deleteImg from "../../assets/images/delete.svg"
const Table = () => {
  const data = [
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Apartment", propertyType : "Rental",status : "pending" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Big house", propertyType : "Rental",status : "Published" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Apartment", propertyType : "Sold",status : "Published" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Apartment", propertyType : "Rental",status : "Declined" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Apartment", propertyType : "Rental",status : "Published" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Big house", propertyType : "Rental",status : "Published" },
    { id: 1, name: 'Glam Apartment No.3', date: 'Apr 23 ,2021',type : "Apartment", propertyType : "Sold",status : "Published" },
  ];

  return (
    <div className="w-full overflow-x-auto  max-tablet:px-10 max-mobile:px-5">

        <table className=" bg-white mt-10 min-w-full rounded-t-lg">
          <thead>
            <tr >
              <th className="py-4 px-4 border-b border-gray-300 text-left"></th>
              <th className="py-4 px-4 border-b border-gray-300 text-left">Property Name</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left">Issued date</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left">Property type</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left">Property Management</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left">Status</th>
              <th className="py-4 px-4 border-b border-gray-300 text-left"></th>
            </tr>
          </thead>
          <tbody className='bg-lightBg'>
            {data.map((item) => (
              <tr key={item.id} className='h-14'>
                <td className="py-2 ps-4 border-b border-gray-300  text-left">
                      <input type="checkbox" placeholder='check' />
                </td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left font-semibold text-mainBlue">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">{item.date}</td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">{item.type}</td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left">{item.propertyType}</td>
                <td className={`py-2 px-4 border-b border-gray-300 min-w-[160px] text-left ${item.status == "Published" && ""}`}>{item.status}</td>
                <td className="py-2 px-4 border-b border-gray-300 min-w-[160px] text-left ">
                  <div className='flex gap-2 cursor-pointer'>
                      <Image src={deleteImg} className='w-4 my-auto' alt="" />
                      <p className='text-danger font-semibold' >Delete</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Table;