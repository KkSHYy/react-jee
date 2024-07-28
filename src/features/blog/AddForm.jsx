import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
} from "@material-tailwind/react";


const AddForm = () => {

  // checkbox file select
  return (
    <div className='p-7 mx-auto max-w-lg'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Add Blog
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter Blog details
        </Typography>

        <form className="mt-7 mb-2 ">
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              label='Blog Title'
            />
            <Input
              size="lg"
              label='Author'
            />



            <div className="type">
              <Typography>Blog Type</Typography>

              <div className="flex gap-10">

                <Radio name="type" label="News" />
                <Radio
                  color='green'
                  name="type"
                  label="Travel"
                  defaultChecked />
              </div>
            </div>




            <div>
              <Textarea label="Description" />
            </div>



          </div>

          <Button className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>
    </div>
  )
}

export default AddForm