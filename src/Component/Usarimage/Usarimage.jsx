import React, { useEffect, useState } from 'react';
import { analytics } from '../../Pages/Createemployee/config'; // Make sure to correctly import your firebase config
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';


const Usarimage = () => {

  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState([]);

  const handleClick = () => {
    if (img !== null) {
      const imgRef = ref(analytics, `files/${v4()}`);
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        getDownloadURL(value.ref).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    }
  };

  useEffect(() => {
    listAll(ref(analytics, 'files')).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  const lastimage = imgUrl[imgUrl.length - 1]
  console.log("image url", lastimage);

  useEffect(() => {
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({ img_URL: lastimage })
    })

  },[lastimage])

  return (
    <div className="flex -mb-12  items-center gap-5  bg-white  p-4">
      <input
        type="file"
        onChange={(e) => setImg(e.target.files[0])}
        className="-mb-16  p-0 w-46 h-8 border border-gray-300 rounded"
      />
      <button
        onClick={handleClick}
        className="-mb-16  px-4 h-8 py-0 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {imgUrl.length > 0 && (
        <div className="flex flex-col items-center">
          <img
            src={imgUrl[imgUrl.length - 1]}
            alt="Uploaded"
            className="h-36 p-1 w-32 object-cover rounded"
          />
        </div>
      )}
    </div>

  );
}

export default Usarimage