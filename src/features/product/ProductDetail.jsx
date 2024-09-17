import React from 'react'
import { useParams } from 'react-router';
import { imageUrl } from '../constants/api_urls';
import { Rating } from '@material-tailwind/react';
import { useGetProductByIdQuery } from './productApi';
import AddCart from '../cart/AddCart';

const ProductDetail = () => {
   
  const {id}= useParams();

  const {isLoading, error, data} = useGetProductByIdQuery(id);

  if(isLoading)
   return <h1>Loading......</h1>

  return (
    <>
  <div className='grid grid-cols-3 p-4 items-start gap-10'>
   
   <div className="image">
     <img className='w-full' src={`${imageUrl}${data.image}`} alt="" />
   </div>
   <div className="info space-y-3">
     <h1>{data.name}</h1>
     <p>{data.description}</p>
     <p>Rs.{data.price}</p>
     <Rating value={Math.floor(data.rating)} readonly />
   </div>

   {data && <AddCart product={data} />}

 </div>
 
 {/* <ProductReview user={user} id={data._id} review={data.reviews}/> */}
    </>
  
  )
}

export default ProductDetail