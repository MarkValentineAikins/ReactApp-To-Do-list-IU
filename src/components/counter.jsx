import React, {useState} from "react";

function Counter(){
    const [ state, setState] = useState(0);
    const [ data, setdata] = useState("");
    const [gender, setgender] = useState("");
    let increase =() => setState(state + 1);
    let decrease =() => setState(state - 1);
    let Reset =() => setState(0);
    let handleChanage = (event)=>{setdata(event.target.value)}
    let handleChanagegender = (e) => {setgender(e.target.value);}

    return(

        <div className="ml-4">Counter
            <h1>My current state is {state}</h1>
            <hi>You have entereed: {data}</hi><br/>
            <h1>Select your : {gender}</h1>
            <input type="text" onChange={handleChanage} className=" bg-green-100 px-3 py-4 rounded-md "/><br/>
            <select onChange = {handleChanagegender} className=" bg-red-300 px-3 py-4 mt-2 ml-2 rounded-md border-spacing-1 border-1 ">
            <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <div className="justify-between gap-4 px-3 py-3 flex space-x-1 margin-left-1px w-20">
            <button onClick = {increase} className=" bg-pink-200 px-3 py-3 rounded-md border-spacing-1 ">Increase</button>
            <button onClick={ decrease} className=" bg-red-200 px-3 py-3 rounded-md border-spacing-1 ">Decrease</button>
            <button onClick={Reset} className=" bg-gray-200 px-3 py-3 rounded-md border-spacing-1 ">Reset</button>
            </div>
        </div>
    );
}

export default Counter;