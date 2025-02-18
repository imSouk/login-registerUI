/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom"

function withNavigate(Component){
 return function ComponentNavigate(props){
    const navigate = useNavigate();
    <Component {...props} navigate ={navigate} />
        }
}

function Dashboard({navigate}){

    return (
        <div></div>
       


    )
}
export default withNavigate(Dashboard);