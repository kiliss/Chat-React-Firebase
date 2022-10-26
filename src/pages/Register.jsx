import React from 'react'
import {FcAddImage} from 'react-icons/fc'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [error, setError] = React.useState(false)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const avatar = e.target[3].files[0]
        try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        

        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            setError(true)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
              await updateProfile(res.user,{
                displayName: name,
                photoURL: downloadURL
              })
              await setDoc(doc(db, "users", res.user.uid), {
                  uid: res.user.uid,
                  displayName: name,
                  email: email,
                  photoURL: downloadURL
                });

                await setDoc(doc(db, "userChat", res.user.uid),{})
            });
          }
        );
        
    } catch (error) {
        setError(true)
    }

    }
  return (
    <div>
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
            <a href="/">
                <h3 className="text-4xl font-bold text-purple-600">
                    Register
                </h3>
            </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="name"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Email
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            name="email"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        className="block text-sm font-medium text-gray-700 undefined"
                    >
                        Password
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="password"
                            name="password"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                        />
                    </div>
                </div>
                <div className="mt-4">

                    <div>
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700 undefined">
                        <span>Add Avatar</span>
                        <FcAddImage size="50"/>
                        <input type="file" name="file" id="file" className="hidden" />
                        </label>
                        
                    </div>
                    {
                        error && <p className="text-red-500">Error al crear la cuenta</p>
                    }
                </div>
                <div className="flex items-center justify-end mt-4">
                    <a
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                        href="/login"
                    >
                        Already registered?
                    </a>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Register