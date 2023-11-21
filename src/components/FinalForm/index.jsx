// // https://docs.google.com/forms/d/e/1FAIpQLSfYssbbYZ5QPUWqpGpr6gbZzariguoSE8T0xxjIIiP7KfmbHw/viewform

// // ?usp=pp_url&entry.1728615524=name&entry.1240768026=dept&entry.2020603713=roll&entry.637702268=mail

// import React, { useState } from "react";

// const GOOGLE_FORM_URL = "https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSfYssbbYZ5QPUWqpGpr6gbZzariguoSE8T0xxjIIiP7KfmbHw/viewform";

// const NAME_PRAM = "entry.1728615524";
// const DEPT_PRAM = "entry.1240768026";
// const ROLL_PRAM = "entry.2020603713";
// const MAIL_PRAM = "entry.637702268";

// const encodeFormData = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

// export default function FinalForm() {
//     const [status,setStatus] = useState("");
//     const [name, setName] = useState("");
//     const [dept, setDept] = useState("");
//     const [roll, setRoll] = useState("");
//     const [mail, setMail] = useState("");
  
//     const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       [NAME_PRAM]: name,
//       [DEPT_PRAM]: dept,
//       [ROLL_PRAM]: roll,
//       [MAIL_PRAM]: mail,
//     };

//     fetch(GOOGLE_FORM_URL, {
//       method: "POST",
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: encodeFormData(formData),
//     })
//       .then((response) => {
//         setStatus("Thank you for submitting the form!");
//         setName("");
//         setMail("");
//         setDept("");
//         setRoll("");
//       })
//       .catch((error) => {
//         setStatus("Oops! Something went wrong. Please try again.");
//         console.log(error);
//       });
//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="roll">Roll Number:</label>
//           <input
//             type="text"
//             id="roll"
//             name="roll"
//             value={roll}
//             onChange={(e) => setRoll(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="dept">Department:</label>
//           <input
//             type="text"
//             id="dept"
//             name="dept"
//             value={dept}
//             onChange={(e) => setDept(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="mail">Email:</label>
//           <input
//             type="text"
//             id="mail"
//             name="mail"
//             value={mail}
//             onChange={(e) => setMail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <p>{status}</p>
//     </div>
//   );
// }


import "./index.css"
import riddler from "./../../assets/Images/riddler.png"
export default function FinalForm() {
  return(
    <div className="Quiz"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYssbbYZ5QPUWqpGpr6gbZzariguoSE8T0xxjIIiP7KfmbHw/viewform?embedded=true" width="90%" height="400px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    <img src={riddler} style={{height:"25vh", width:"auto", padding:"0px",margin:"0px", position:"absolute",left:"0px",bottom:"0px"}}/>
    </div>)
}