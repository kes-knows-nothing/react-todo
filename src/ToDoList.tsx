
import { useForm } from "react-hook-form";

interface IForm {
    toDo: string;
}

function ToDoList() {
    const {
        register, handleSubmit, setValue
    } = useForm<IForm>()
    const onSumbit = (data: IForm) => {
        console.log('add to do', data.toDo)
        setValue("toDo", "");
    }
    return ( 
        
   <div>
        <form onSubmit={handleSubmit(onSumbit)}>
            <input {...register("toDo", {
                required: "Please write a to do",
            })} placeholder="Write a to do"/>
            <button>Add</button>
        </form>
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