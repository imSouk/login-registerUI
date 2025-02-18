/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function withNavigate(Component) {
  return function ComponentNavigate(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

function Register({ navigate, createUser }) {
    const [User, setUser] = useState({
        name: '',
        email: '',
        password:'',
      });

    
  function registerClick(user){
    createUser(user);
    
  }
  const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
 });
    
  return (
    <div className="bg-slate-100 w-screen h-screen justify-center  flex ">
      
      <div className="bg-slate-50 w-[250px] h-[330px] justify-center items-center flex flex-col gap-3 rounded-md mt-20 pt-2 pb-2 shadow-2xl relative">
      <h1 className="text-center text-blue-600 font-bold text-xl ">
        Register
      </h1>
        <div className="flex flex-col gap-2">
        <input
          className=" w-fit h-[30px] rounded-2xl px-2 pl-2  border-2  bg-slate-100 outline-none focus:border-blue-300 focus:ring-1"
          value = {User.name}
          onChange={(e)=>setUser({...User, name : e.target.value})}
          type="text"
          placeholder="Name"
        />
        <input
          className=" w-fit h-[30px] rounded-2xl px-2 pl-2  border-2  bg-slate-100 outline-none focus:border-blue-300 focus:ring-1"
          type="text"
          value = {User.email}
          onChange={(e)=>setUser({...User, email : e.target.value})}
          placeholder="Email"
        />
        <input
          className="w-fit h-[30px] rounded-2xl px-2 pl-2  border-2  bg-slate-100 outline-none focus:border-blue-300 focus:ring-1"
          onChange={(e)=>{
            const confirmEmail = e.target.value;
            setErrorMessage((prev) => ({
              ...prev,
              email: confirmEmail !== User.email ? "Emails não correspondem" : "",
            }));
          }}
          type="text"
          placeholder="Email confirm"
        />
        {errorMessage.email && <p className="text-red-600 text-sm">{errorMessage.email}</p>}
  
        <input
          className="w-fit h-[30px] rounded-2xl px-2 pl-2  border-2  bg-slate-100 outline-none focus:border-blue-300 focus:ring-1"
          value = {User.password}
          onChange={(e)=>setUser({...User, password : e.target.value}) }
          type="password"
          placeholder="Password"
        />
         <input
            className="w-fit h-[30px] rounded-2xl px-2 pl-2 border-2 bg-slate-100 outline-none focus:border-blue-300 focus:ring-1"
            onChange={(e) => {
              const confirmPassword = e.target.value;
              setErrorMessage((prev) => ({
                ...prev,
                password: confirmPassword !== User.password ? "Senhas não correspondem" : "",
              }));
            }}
            type="password"
            placeholder="Password confirm"
          />
          {errorMessage.password && <p className="text-red-600 text-sm">{errorMessage.password}</p>}
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button className="w-[100px] h-[25px] bg-blue-600 rounded-xl text-xs  text-white" onClick={() => registerClick(User)}>
            Register
          </button>
          <button
            className="w-[70px] h-[25px] bg-blue-600 rounded-xl text-xs  text-white "
            onClick={() => {
              navigate("/");
            }}
          >
            voltar
          </button>
        </div>
      </div>
    </div>
  );
}
export default withNavigate(Register);
