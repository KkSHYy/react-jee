import { Button, Card, rating, Typography } from '@material-tailwind/react';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setToCarts } from './cartSlice';


const AddCart = ({product}) => {
  const user = useAuth();

  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      qty: 1
      },
      onSubmit: (val) => {
        const newProduct = {
      ...product,
      qty:Number(val.qty)
        };
        dispatch(setToCarts(newProduct));
      }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
    <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>

          <th

            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              Product Name
            </Typography>
          </th>
          <th

            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              {product.title}
            </Typography>
          </th>

        </tr>

        <tr>

          <th

            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              Qty
            </Typography>
          </th>
          <th
            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
          >

<div>

      <select onChange={(e) => formik.setFieldValue('qty', e.target.value)} name="qty" id="" className=' py-2 bg-white shadow-lg'>
      {[...Array(product.stock).keys()].map((c) => {
          return <option key={c + 1} value={c + 1}>{c + 1}</option>
                })};
              </select>
            </div>
          </th>

        </tr>

      </thead>
    </table>

    <div className='flex justify-center pt-7'>
      <Button disabled={user.isAdmin} type='submit'> Add To Cart</Button>
    </div>
  </Card>
  </Form>
  )
}

export default AddCart