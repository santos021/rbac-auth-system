import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [userContent, setUserContent] = useState("");
  const [adminContent, setAdminContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    API.get("/user")
      .then(res => setUserContent(res.data))
      .catch(() => {});

    API.get("/admin")
      .then(res => setAdminContent(res.data))
      .catch(() => {});

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-8 bg-emerald-600 p-4">

        <h1 className="text-3xl text-white font-bold">
          Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="w-8/12 mx-auto grid md:grid-cols-1 justify-center text-center  gap-6">

        {userContent && (

          <div className="bg-yellow-600 p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-2">
              User Content
            </h2>

            <p>{userContent}</p>

          </div>

        )}

        {adminContent && (

          <div className="bg-cyan-600  p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-2">
              Admin Content
            </h2>

            <p>{adminContent}</p>

          </div>

        )}

      </div>

    </div>
  );
}