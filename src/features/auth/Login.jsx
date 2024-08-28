import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";


const Login = () => {

  const nav = useNavigate();

  return (
    <div className="p-4 w-80 max-w-screen-lg sm:w-96">  
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        LogIn
      </Typography>
    
      <form className="mt-5 mb-2">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      
        <Button className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <button type="button" onClick={() => nav('/register')} className ="font-medium text-gray-900">
            Sign Up
          </button>
        </Typography>
      </form>
    </Card>
    </div>
  );
}

export default Login