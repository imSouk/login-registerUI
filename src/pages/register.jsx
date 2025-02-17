/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom"

function withNavigate(Component){
    return function ComponentNavigate(props){
        const navigate = useNavigate();
        return <Component {...props} navigate = {navigate}/>
    }
}

function Register({navigate}){

    return(
        <div className="bg-slate-100 w-screen h-screen justify-center  flex ">
        <div className="bg-orange-300 w-[250px] h-[250px] justify-center items-center grid gap-1 rounded-md mt-20 pt-2 pb-2 hover:shadow-2xl transition-shadow duration-500 ease-in-out relative">
          <input className=" w-fit h-[25px] rounded-sm p-2  bg-slate-100" type="text" placeholder="insira um usuario"/>
          <input className=" w-fit h-[25px] rounded-sm p-2  bg-slate-100" type="text" placeholder="Insira seu email"/>
          <input className=" w-fit h-[25px] rounded-sm p-2  bg-slate-100" type="text" placeholder="confirme seu email"/>
          <input className=" w-fit h-[25px] rounded-sm p-2 bg-slate-100" type="password"  placeholder = "Insira uma senha" />
          <input className=" w-fit h-[25px] rounded-sm p-2 bg-slate-100" type="password"  placeholder = "cofirme sua senha" />
          <div className="grid ">
              <button className=" w-[50px] h-[25px] bg-gray-300 rounded" >login</button>
              <button className="w-[50px] h-[25px] absolute bottom-2 right-1 mr-5 bg-gray-300  rounded"
                      onClick={()=>{navigate("/")}}>voltar</button>
              </div>
        </div>
      </div>
    );
}
export default withNavigate(Register)