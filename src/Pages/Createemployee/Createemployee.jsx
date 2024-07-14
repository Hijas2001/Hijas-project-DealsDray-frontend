
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


import React, { useState } from 'react'
import Usarimage from '../../Component/Usarimage/Usarimage'

const Createemployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        courses: checked
          ? [...prevState.courses, value]
          : prevState.courses.filter((course) => course !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile No:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className="block text-gray-700">
            Designation:
          </label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Course:</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="courses"
                value="React"
                checked={formData.courses.includes('React')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">React</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="courses"
                value="Node.js"
                checked={formData.courses.includes('Node.js')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Node.js</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="courses"
                value="Python"
                checked={formData.courses.includes('Python')}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Python</span>
            </label>
          </div>
        </div>

  
          <Usarimage></Usarimage>
      

        <button
          type="submit"
          className="w-full mt-16 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Createemployee