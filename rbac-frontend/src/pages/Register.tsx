import { useForm } from "react-hook-form";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export default function Register() {

  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {

    try {

      await API.post("/auth/register", data);

      alert("Registration successful!");

      navigate("/");

    } catch (error) {
        console.error("Failed",error);
      alert("Registration failed");

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          {...register("name")}
          placeholder="Name"
          className="border p-2 mb-3 w-full rounded"
        />

        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 mb-3 w-full rounded"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="border p-2 mb-3 w-full rounded"
        />

        <select
          {...register("role")}
          className="border p-2 mb-4 w-full rounded"
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>

        <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Login
          </span>
        </p>

      </form>

    </div>
  );
}