import React, { useState } from 'react'

const AddTodo = (props) => {
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");

    const submitResultSet = (e)=>{
        e.preventDefault();
        if(!name || !description){
            alert("Both 'Task Name' and 'Task Description' fields are necessary!")
            return 0;
        }
        // console.log("So far we received is ",name,description)

        // Calling insert function into Todo Array
        props.addUserInputTodo(name,description);
        setName("");
        setDescription("");
    }


    return (
        <>
            <form onSubmit={submitResultSet} className="mt-16 mx-8 md:mx-16 xl:mx-32 mb-20 min-h-[75vh]">

                <div className='text-2xl font-mono font-semibold'>Add Todo</div>
                <div className='mt-2 text-md'>Use this form to add ToDo tasks into your calendar.</div>

                <div className="mt-10 border-b border-gray-900/10 pb-8">
                    <div className="grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-6">
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Task Name</label>
                            <div className="mt-2">
                                <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="md:col-span-4">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Task Description</label>
                            <div className="mt-2">
                                <input type="text" name="description" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex items-center justify-center">
                    <button type="submit" className='rounded-md shadow-sm p-2 mt-5 text-white bg-indigo-600 hover:bg-indigo-500 font-medium font-mono'>Add Task</button>
                </div>
            </form>

        </>
    )
}

export default AddTodo
