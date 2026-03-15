import { useForm } from "react-hook-form";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

export default function Login() {

  const { register, handleSubmit } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {

    try {

      const response = await API.post("/auth/login", data);

      const token = response.data.token;

      localStorage.setItem("token", token);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {
        console.log(error);
        
      alert("Invalid credentials");

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 mb-3 w-full rounded"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="border p-2 mb-4 w-full rounded"
        />

        <button
          className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Register
          </span>
        </p>

      </form>

    </div>
  );
}