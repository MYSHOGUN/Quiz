import { useContext } from "react";
import { DataContext } from "../App";

const Menu = () =>{
    const {setAppState} = useContext(DataContext)
    return (
        <div className = "menu">
            <button onClick={()=>setAppState("quiz")}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu;