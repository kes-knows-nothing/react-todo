import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() { 
    const toDos = useRecoilValue(toDoSelector)
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
      setCategory(event.currentTarget.value as any)
    }
    return ( 
        
   <div>
      <h1>To Dos</h1>
        <hr />
        <select value={category} onInput={onInput}>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo />
        {toDos?.map((toDo) => (<ToDo key={toDo.id} {...toDo} />))}
    </div>
    );
}

// interface IForm {
//     email: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     password: string;
//     password1: string;
//     extraError? : string;
//   }

// function ToDoList() {
//     const { 
//         register, 
//         handleSubmit, 
//         formState: { errors },
//         setError,
//     } = useForm<IForm>({
//         defaultValues: {
//             email: "@naver.com",
//         }
//     });
//     const onValid = (data: IForm) => {
//         console.log(data)
//         if(data.password !== data.password1) {
//             setError("password1", { message: "Password are not the same"}, {shouldFocus: true})
//         }
//         setError("extraError", {message: "Server offline."});
//     };

//     return <div>
//        <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input {...register("email", { required: "Email is required", pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },  })} placeholder="Email" />
//         <span>
//         {errors?.email?.message}
//         </span>
//         <input
//           {...register("firstName", { required: "Write Here", validate: {noKes: (value) => value.includes("kes") ? "no kes is allowed" : true},  })}
//           placeholder="First Name"
//         />
//         <span>
//         {errors?.firstName?.message}
//         </span>
//         <input
//           {...register("lastName", { required: "Write Here" })}
//           placeholder="Last Name"
//         />
//         <span>
//         {errors?.lastName?.message}
//         </span>
//         <input
//           {...register("username", { required: "Write Here" , minLength: 10 })}
//           placeholder="Username"
//         />
//         <span>
//         {errors?.username?.message}
//         </span>
//         <input
//           {...register("password", { required: "Password is required" , minLength: 5 })}
//           placeholder="Password"
//         />
//         <span>
//         {errors?.password?.message}
//         </span>
//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: {
//               value: 5,
//               message: "Your password is too short.",
//             },
//           })}
//           placeholder="Password1"
//         />
//         <span>
//         {errors?.password1?.message}
//         </span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
// }



export default ToDoList;