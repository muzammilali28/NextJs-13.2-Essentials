/**
 * This whole component is purely Server-Sided Rendered, Here we are handling all the user inputs and everything in the form without using the
 * useState, useEffect etc the onChanges and onSubmit etc .... All the hassel of form submission is optimised with server rendering/computation from
 * Next Js in this latest 13.4 update called (Server Action).
 * 
 * In my Opinion it is very powerfull and minimizes the JS rendring on the client side and boosting you applications performance.
**/

import { redirect } from 'next/navigation';
import createTodo from './serverAction';

const CreateTodo = () => {

    const formSubmission = async (formData) => {
        "use server"
        try {
            const response = await createTodo({
                title: formData.get("title"),
                description: formData.get("description"),
            })

            console.log("Response After Submitting Form : ",response)

        } catch (error) {
            console.log(error);
            throw new Error("Issue with the Form Submission")
        }

        redirect('/serverAction')  // Once Form is Created, it will redirect to the provided route, this works in both Server-Side and Client-Side component
    }

    return (
        <div className="form-section">
            <form className="todo-form" action={formSubmission}>
                <div className="todo-input">
                    <label className="todo-label">
                        Title
                        <input type="text" name="title"
                            placeholder="Enter the Title"
                            required
                        />
                    </label>
                </div>
                <div className="todo-input">
                    <label className="todo-label">
                        Description
                        <textarea type="text" name="description"
                            placeholder="Enter the Description"
                            required
                            autoComplete="off"
                        />
                    </label>
                </div>
                <div>
                    <button type="submit" className="btn btn-back">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo;

/**
 * Previosuly we used to do this when filling out forms and handels the onChange, onSubmit and the values attributes etc...
 * but now we we have Server Action in Next Js using the "use server" to mutate all the data from the form directly to the Database
 * without handeling the onChanges, the onSubmits etc...
 *
 * you know what I mean, the procedures we have to go through when creating a typical form.
**/

// const CreateTodo = () => {
//     const[todo, setTodo] = useState({
//         title:"",
//         description:"",
//     })
//     const [status, setStatus] = useState(null);


//     function handleChange(e) {
//         const name = e.target.name;
//         const value = e.target.value;

//         setTodo((prevTodo) => ({...prevUser, [name] : value}));
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('/api/todo', {
//                 method:'POST',
//                 headers:{"Content_Type":"application/json"},
//                 body: JSON.stringify({
//                     title:todo.title,
//                     description:todo.description,
//                 })
//             })
//             // Set the status based on the response from the API route
//             if (response.status === 200) {
//                 setTodo({
//                     title: "",
//                     description: "",
//                 })
//                 setStatus('success');
//             } else {
//                 setStatus('error');
//             }

//         }catch (e) {
//             console.log(e)
//         }

//     }
// return (
//     <div className="form-section" onSubmit={handelSubmit}>
//         <form className="todo-form" onSubmit={handleSubmit}>
//             <div className="todo-input">
//                 <label className="todo-label">
//                     Title
//                     <input type="text" name="title" id="title"
//                         placeholder="Enter the Title"
//                            value={title}
//                            onChange={handelChange}
//                            required
//                     />
//                 </label>
//             </div>
//             <div className="todo-input">
//                 <label className="todo-label">
//                     Description
//                     <textarea type="text" name="description" id="description"
//                            placeholder="Enter the Description"
//                            value={description}
//                            onChange={handelChange}
//                            required
//                            autoComplete="off"
//                     />
//                 </label>
//             </div>
//             <div>
//                 <button type="submit" className="btn btn-back">Create</button>
//             </div>
//         </form>
//     </div>
// )
// }
