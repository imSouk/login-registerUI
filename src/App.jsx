/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import './App.css'
import { useNavigate } from 'react-router-dom'

function withNavigate(Component){
  return function ComponentNavigate(props){
      const navigate = useNavigate();
      return <Component {...props} navigate = {navigate}/>
  }
}




function App({navigate}) {
  function onClickRegister(){
    navigate("/Register")
  }
  function onClickLogin(){
    navigate("/Login")
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center ">
      <div className="bg-orange-300 w-[200px] h-[80px] mt-20 justify-center p-3 gap-1  grid rounded-md">
          <button className="bg-slate-200 w-[75px] h-[25px] text-center mb-1 rounded-md shadow-md  " onClick={onClickLogin}>Login</button>
          <button className="bg-slate-200 w-[75px] h-[25px] text-center rounded-md shadow-md " onClick={onClickRegister}>Register</button>
      </div>
    </div>
  )
}

export default withNavigate(App)
