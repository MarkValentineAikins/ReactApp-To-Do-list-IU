import React from "react";
import {TrashIcon} from "@heroicons/react/outline";

function TaskItem(){

    return(
        <div className="flex  bg-gray-200 mt-10 border-2 rounded-md border-gray-300">
                <div className="flex-1">Lorem ipsum dolor sit.</div>
                <div className="bg-blue-500 p-2 rounded-md"><TrashIcon height={24} color="white"/></div>
                </div>
    )
}

export default TaskItem;
