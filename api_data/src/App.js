import React, { useRef, useState } from "react";
import "./App.css";

import apiClient from "./http-common";

// GET request

// function App() {
//   const get_id = useRef(null); //useRef persists the values in re-renders. and returns object current
//   const get_title = useRef(null);

//   const [getResult, setGetResult] = useState(null);

//   const fortmatResponse = (res) => {
//     return JSON.stringify(res, null, 2);
//     // res - value to turn to string
//     // null - repalcer
//     // 2 - etti white spaces or indentation dineyy 
//   };

//   async function getAllData() {
//     try {
//       // const res = await apiClient.get("/tutorials");
//       // const res = await apiClient.get("/products");
//       const res = await apiClient.get("/getInfo");

//       const result = {
//         status: res.status + "-" + res.statusText,
//         headers: res.headers,
//         data: res.data,
//       };

//       setGetResult(fortmatResponse(result));
//     } catch (err) {
//       setGetResult(fortmatResponse(err.response?.data || err));
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx then err.response.data 
//     }
//   }

//   async function getDataById() {
//     const id = get_id.current.value;

//     if (id) {
//       try {
//         // const res = await apiClient.get(`/tutorials/${id}`);
//         // const res = await apiClient.get(`/products/${id}`);
//         const res = await apiClient.get(`/getInfo/student/${id}`);

//         const result = {
//           data: res.data,
//           status: res.status,
//           statusText: res.statusText,
//           headers: res.headers,
//         };

//         setGetResult(fortmatResponse(result));
//       } catch (err) {
//         setGetResult(fortmatResponse(err.response?.data || err));
//       }
//     }
//   }

//   // async function getDataByTitle() {
//   //   const title = get_title.current.value;
//   //   console.log(title)

//   //   if (title) {
//   //     try {
//   //       // const res = await instance.get(`/products?title=${title}`);
//   //       // const res = await apiClient.get("/tutorials", {
//   //       const res = await apiClient.get("/products", {
//   //         params: {
//   //           title: title,
//   //         },
//   //       });

//   //       const result = {
//   //         status: res.status + "-" + res.statusText,
//   //         headers: res.headers,
//   //         data: res.data,
//   //       };

//   //       setGetResult(fortmatResponse(result));
//   //     } catch (err) {
//   //       setGetResult(fortmatResponse(err.response?.data || err));
//   //     }
//   //   }
//   // }

//   const clearGetOutput = () => {
//     setGetResult(null);
//   };

//   return (
//     <div id="app" className="container">
//       <div className="card">
//         <div className="card-header">React Axios GET - BezKoder.com</div>
//         <div className="card-body">
//           <div className="input-group input-group-sm">
//             <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>

//             <input type="text" ref={get_id} className="form-control ml-2" placeholder="Id" />
//             <div className="input-group-append">
//               <button className="btn btn-sm btn-primary" onClick={getDataById}>Get by Id</button>
//             </div>

//             <input type="text" ref={get_title} className="form-control ml-2" placeholder="Title" />
//             <div className="input-group-append">
//               <button className="btn btn-sm btn-primary" onClick={getDataByTitle}>Find By Title</button>
//             </div>

//             <button className="btn btn-sm btn-warning ml-2" onClick={clearGetOutput}>Clear</button>
//           </div>   
          
//           { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// Now we can use apiClient to send HTTP requests and receive responses.

// The response for a Axios request contains:

// data: parsed response body provided by the server
// status: HTTP status code
// statusText: HTTP status message
// headers: HTTP headers (lower case)
// config: the request config that was provided to axios
// request: the last client request instance that generated this response

// ==============================================================================================
// POST request
function App() {

  const userName = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const password = useRef(null);
  const role = useRef(null);

  const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function postData() {
    const postData = {    

      firstName: firstName.current.value,
      lastName: lastName.current.value,
      userName: userName.current.value,
      password: password.current.value,
      role: role.current.value,
    };

    try {
      // const res = await apiClient.post("/tutorials", postData, {
      const res = await apiClient.post("/register/student", postData, {
        headers: {
          "x-access-token": "token-value",
          
        },
      });

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(fortmatResponse(err.response?.data || err));
    }
  }

  const clearPostOutput = () => {
    setPostResult(null);
  };

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">React Axios POST - BezKoder.com</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" ref={firstName} placeholder="firstName" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={lastName} placeholder="lastName" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={userName} placeholder="userName" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={password} placeholder="password" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={role} placeholder="role" />
          </div>
          <button className="btn btn-sm btn-primary" onClick={postData}>Post Data</button>
          <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>

          { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
        </div>
      </div>
    </div>
  );
}

export default App;
// ===========================================================

// DELETE request

// function App() {
//   const delete_id = useRef(null);
  
//   const [deleteResult, setDeleteResult] = useState(null);

//   const fortmatResponse = (res) => {
//     return JSON.stringify(res, null, 2);
//   };

//   // async function deleteAllData() {
//   //   try {
//   //     const res = await apiClient.delete("/tutorials");

//   //     const result = {
//   //       status: res.status + "-" + res.statusText,
//   //       headers: res.headers,
//   //       data: res.data,
//   //     };

//   //     setDeleteResult(fortmatResponse(result));
//   //   } catch (err) {
//   //     setDeleteResult(fortmatResponse(err.response?.data || err));
//   //   }
//   // }

//   async function deleteDataById() {
//     const id = delete_id.current.value;

//     if (id) {
//       try {
//         const res = await apiClient.delete(`/delete/student/${id}`);

//         const result = {
//           status: res.status + "-" + res.statusText,
//           headers: res.headers,
//           data: res.data,
//         };

//         setDeleteResult(fortmatResponse(result));
//       } catch (err) {
//         setDeleteResult(fortmatResponse(err.response?.data || err));
//       }
//     }
//   }

//   const clearDeleteOutput = () => {
//     setDeleteResult(null);
//   };

//   return (
//     <div id="app" className="container">
//       <div className="card">
//         <div className="card-header">React Axios DELETE - BezKoder.com</div>
//         <div className="card-body">
//           <div className="input-group input-group-sm">
//             {/* <button className="btn btn-sm btn-danger" onClick={deleteAllData}>Delete All</button> */}

//             <input type="text" ref={delete_id} className="form-control ml-2" placeholder="Id" />
//             <div className="input-group-append">
//               <button className="btn btn-sm btn-danger" onClick={deleteDataById}>Delete by Id</button>
//             </div>

//             <button className="btn btn-sm btn-warning ml-2" onClick={clearDeleteOutput}>Clear</button>
//           </div>    
          
//           { deleteResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{deleteResult}</pre></div> }      
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
