/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function withNavigate(Component) {
  return function ComponentNavigate(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

function App({ loginRequest, navigate }) {
  const [autorization, setAutorization] = useState();
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const  loginClick = async()=>{
    const result = await loginRequest(User);
    if(result.success)
      {
        setAutorization(true);
        console.log('logando');
        navigate('/Dashboard')
      }
    else{
      setAutorization(false)
      console.log('Usuario invalido')
      alert('email ou senha invalido, tente novamente!')
    }
  };
  return (
    <div className="bg-slate-100 w-screen h-screen justify-center  flex ">
      <div className=" bg-slate-50 w-[250px] h-[280px] justify-center items-center grid gap-1 rounded-md mt-20 pt-2 pb-2 shadow-2xl relative">
        <h1 className="text-center text-blue-600 font-bold text-xl mb-5">
          Login
        </h1>
        <input
          className=" w-fit h-[30px] rounded-2xl px-2 pl-2  border-2 border-blue-600 border-opacity-85 bg-slate-100 outline-none"
          value= {User.email}
          onChange ={(e)=>setUser({...User,email: e.target.value})}
          type="text"
          placeholder="Email"
        />
        <input
          className=" w-fit h-[30px] rounded-2xl px-2 pl-2  border-2 border-blue-600 border-opacity-85 bg-slate-100 outline-none"
          value= {User.password}
          onChange={(e)=>setUser({...User,password:e.target.value})}
          type="password"
          placeholder="Password"
        />
        <div className="flex flex-col items-center gap-2 relative">
          <button className=" w-[100px] h-[25px] bg-blue-600 rounded-xl text-xs mt-5 text-white "
          onClick={loginClick}>
            LOGIN
          </button>

          <div className="flex flex-col items-center mt-2">
            <span className="text-slate-950 opacity-65 text-sm mb-1">
              Nao possui uma conta?
            </span>

            <Link to="Register" className="text-blue-600 hover:underline">
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withNavigate(App);
