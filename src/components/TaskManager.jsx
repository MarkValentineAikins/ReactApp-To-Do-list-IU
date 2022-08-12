import React from "react";
import TaskItem from "./TaskItem";
//import {TrashIcon} from "@heroicons/react/outline";

//import {academic-cap} from "@heroicons/react/outline"; 
//import TaskItem from "./TaskItem";

function TaskManager (){

    return(
        <div className="bg-blue-400 h-screen flex justify-center items-center">
            
            <div className="max-w-xl rounded-xl bg-white py-10 px-5" >
            <div className="flex justify-center mb-10 bg-blue-900 rounded-2xl"><h1 className="text-white text-center text-lg font-extrabold">To-Do-List</h1></div>
                <form className="flex space-x-2 w-[30rem]">
               
                    <input type="text" className="border-blue-400 border-2 px-2 py-3 rounded-md p-2 outline-none w-10/12" placeholder="enter a list "/> 
                <button type="add" className="bg-blue-600 px-6 py-4 text-lg rounded-md text-center font-serif text-white">Add</button>
                </form>
                <div className="space-y-2">
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                </div>
            </div>
            
                
        
        </div>
    );
}

export default TaskManager;
