import React from "react";

interface studentProps{
    id:string;
    name:string;
    marks:number;
}

const StudentInformation:React.FC<studentProps>=({id,name,marks})=>{

    return(<>
    <h2>Id{id}</h2>
    <h2>Name{name}</h2>
    <h2>Marks{marks}</h2>
    </>)

}
export default StudentInformation;