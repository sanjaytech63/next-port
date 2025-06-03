import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAe4n4kjuB7hCmIVNKxcjRY9QhufxbC_44",
  authDomain: "eccom-app-83c45.firebaseapp.com",
  projectId: "eccom-app-83c45",
  storageBucket: "eccom-app-83c45.firebasestorage.app",
  messagingSenderId: "51676446258",
  appId: "1:51676446258:web:2a9b639bbff7b4dea5c62b"
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig