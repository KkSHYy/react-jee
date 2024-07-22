import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router';
const CategoryCard = ({ cata: { idCategory, strCategory, strCategoryThumb, strCategoryDescription } }) => {

  const nav = useNavigate();
  return (
    <Card className="mt-6 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          className='w-full'
          src={strCategoryThumb}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {strCategory}
        </Typography>
        <Typography>
          {strCategoryDescription.substring(0, 100)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => nav(`/category/${strCategory}`)}>Read More</Button>
      </CardFooter>
    </Card>
  )
}

export default CategoryCard