
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-zrz-nzOiJsnG5pqXAxRHyN00kEmG5tM",
  authDomain: "hijas-project-dealsdray.firebaseapp.com",
  projectId: "hijas-project-dealsdray",
  storageBucket: "hijas-project-dealsdray.appspot.com",
  messagingSenderId: "424032516029",
  appId: "1:424032516029:web:f50d756ae40861cfb904d4",
  measurementId: "G-97B93YRNJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app);