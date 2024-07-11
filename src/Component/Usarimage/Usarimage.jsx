// import React, { useEffect, useState } from 'react';
// import { analytics } from '../../Pages/Createemployee/config'; // Make sure to correctly import your firebase config
// import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
// import { v4 } from 'uuid';


// const Usarimage = () => {
//     const [img, setImg] = useState('');
//     const [imgUrls, setImgUrls] = useState([]);

//     const handleClick = () => {
//         if (img !== null) {
//             const imgRef = ref(analytics, `files/${v4()}`);
//             uploadBytes(imgRef, img).then(respo=> {
//                 alert("photo uploded")
//             }).catch((err) => {
//                 console.log(err);
//             })
//         }

//     };


//     useEffect(() => {
//         listAll(ref(analytics, "files")).then(imgs => {
//             console.log(imgs);

//             imgs.items.forEach(val => {
//                 getDownloadURL(val).then(url => {
//                     setImgUrls(prevUrls => [...prevUrls, url]);
//                 }).catch(error => {
//                     console.error("Error getting download URL: ", error);
//                 });
//             });
//         }).catch(error => {
//             console.error("Error listing images: ", error);
//         });
//     }, []);

//     console.log("image url", imgUrls);
//     return (
//         <div className="App">
//             <input type="file" onChange={(e) => setImg(e.target.files[0])} />
//             <button style={{ color: "white" }} onClick={handleClick}>Upload</button>
//             <br />
//             {
//                 imgUrls.map((dataVal, index) => (
//                     <div key={index}>
//                         <img src={dataVal} alt="" style={{ height: "200px", width: "200px" }} />
//                         <br />
//                     </div>
//                 ))
//             }

//         </div>
//     );
// }

// export default Usarimage