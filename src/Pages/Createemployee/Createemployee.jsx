
// import React, { useState } from 'react'

// const Createemployee = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     courses: {
//       course1: false,
//       course2: false,
//       course3: false,
//     },
//     image_url: '',
//   });

//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData({
//         ...formData,
//         courses: {
//           ...formData.courses,
//           [name]: checked,
//         },
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (image) {
//       const imageFormData = new FormData();
//       imageFormData.append('product', image);

//       try {
//         const response = await fetch('http://localhost:5000/api/auth/upload', {
//           method: 'POST',
//           body: imageFormData,
//         });

//         if (!response.ok) {
//           const errorText = await response.text();
//           throw new Error(errorText);
//         }

//         const data = await response.json();
//         const imageUrl = data.file.path.replace(/\\/g, '/');

//         setFormData((prevData) => ({
//           ...prevData,
//           image_url: imageUrl,
//         }));

//         setMessage('Form submitted successfully!');
//         console.log(formData);
//       } catch (err) {
//         setMessage(`Upload failed: ${err.message}`);
//       }
//     } else {
//       setMessage('Please select an image to upload.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium  text-white">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-white">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-white">Mobile No</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-white">Designation</label>
//           <select
//             name="designation"
//             value={formData.designation}
//             onChange={handleChange}
//             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="">Select Designation</option>
//             <option value="Manager">Manager</option>
//             <option value="Developer">Developer</option>
//             <option value="Designer">Designer</option>
//           </select>
//         </div>

//         <div>
//           <span className="block text-sm font-medium text-white">Gender</span>
//           <div className="mt-2 gap-3 flex ">
//             <div className="flex  items-center">
//               <input
//                 id="gender-male"
//                 name="gender"
//                 type="radio"
//                 value="male"
//                 onChange={handleChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//               />
//               <label htmlFor="gender-male" className="ml-3 block text-sm font-medium text-white">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="gender-female"
//                 name="gender"
//                 type="radio"
//                 value="female"
//                 onChange={handleChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//               />
//               <label htmlFor="gender-female" className="ml-3 block text-sm font-medium text-white">
//                 Female
//               </label>
//             </div>
//           </div>
//         </div>

//         <div>
//           <span className="block text-sm font-medium text-white">Course</span>
//           <div className="mt-2 space-y-2">
//             <div className="flex items-center">
//               <input
//                 id="course1"
//                 name="course1"
//                 type="checkbox"
//                 checked={formData.courses.course1}
//                 onChange={handleChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label htmlFor="course1" className="ml-3 block text-sm font-medium text-white">
//                 Course 1
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="course2"
//                 name="course2"
//                 type="checkbox"
//                 checked={formData.courses.course2}
//                 onChange={handleChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label htmlFor="course2" className="ml-3 block text-sm font-medium text-white">
//                 Course 2
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="course3"
//                 name="course3"
//                 type="checkbox"
//                 checked={formData.courses.course3}
//                 onChange={handleChange}
//                 className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//               />
//               <label htmlFor="course3" className="ml-3 block text-sm font-medium text-white">
//                 Course 3
//               </label>
//             </div>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-white">Upload Image</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageChange}
//             className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
//           />
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
//     </div>
//   );
// }

// export default Createemployee


import React from 'react'
import Usarimage from '../../Component/Usarimage/Usarimage'

const Createemployee = () => {
  return (
    <div>
      <Usarimage></Usarimage>
    </div>
  )
}

export default Createemployee