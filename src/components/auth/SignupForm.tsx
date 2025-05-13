import { useState, type BaseSyntheticEvent } from "react";
import { createUserWithEmailAndPassword, validatePassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../../../backend/firebase';
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore"; 
import upload from '../../../backend/upload';

function SignupForm() {
    const [profileChosen, setProfileChosen] = useState(false);
    const [profile, setProfile] = useState<string>('');
    const [profileFile, setProfileFile] = useState<File | null>(null);

    const provider = new GoogleAuthProvider();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function usernameInp(e: BaseSyntheticEvent) {
        setUserName(e.target.value);
    }

    function emailInp(e: BaseSyntheticEvent) {
        setEmail(e.target.value);
    }

    function passwordInp(e: BaseSyntheticEvent) {
        setPassword(e.target.value);
    }

    async function addDataToDB(username: string, email: string, uid: string, profile_pic: string | null) {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                username: username,
                email: email,
                id: uid,
                profile_pic: profile_pic,
                blocked: []
            });

            const docRef2 = await addDoc(collection(db, "userChat"), {
                userId: uid,
                messages: [{
                    text: 'Starting the chat!',
                    time: new Date().toISOString(),
                    by: 'me'
                }]
            });
            console.log("Document written with ID: ", docRef.id);
            console.log("User Chats written with ID: ", docRef2.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function signupBtnClick(e: BaseSyntheticEvent) {
        e.preventDefault();
        console.log(e.target);
        
        if (username.length>=6 && email.includes(".") && email.includes("@") && password.length>=8) {
            const pwdStatus = await validatePassword(auth, password);
            if (pwdStatus.isValid) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(async (userCredentials) => {
                        const user = userCredentials.user;
                        console.log(user);
                        if (profileChosen) {
                            const downloadURL = await upload(profileFile);
                            console.log(downloadURL);
                            await addDataToDB(username, email, user.uid, downloadURL);
                        } else {
                            await addDataToDB(username, email, user.uid, null);
                        }
                        toast.success("Signed In successfully")
                    })
                    .catch(error => {
                        console.log("Error in signup");
                        if (error.code == "auth/email-already-in-use") {
                            toast.error("User already exists, please login!");
                        } else {
                            toast.error(`Error: ${error.message}`);
                        }
                    })
                } else {
                    toast.warning("Password must contain lowecase, uppercase, number and special characters.")
                }
        } else {
            toast.error("Min Length: Username: 6, password: 8");
        }
    }

    function googleLogin() {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential: any = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(`Access token: ${token}, user: ${user}`);
            toast.success("Logged In");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const authEmail = error.customData.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
            toast.error(`Error login with google: ${errorCode}, ${errorMessage} on ${authEmail}`);
        });
    }

    function fileInput(e: BaseSyntheticEvent) {
        const file = e.target.files[0];
        if (file) {
            setProfileChosen(true);
            setProfile(URL.createObjectURL(file));
            setProfileFile(file);
        }
    }
    return (
        <div className=" flex flex-col gap-2 text-center justify-center px-8 sm:px-12 py-8 sm:py-12">
            <div>
                <h1 className=" text-xl text-gray-300 font-semibold tracking-wider underline underline-offset-2">SignUp</h1>
            </div>
            <form action="" className=" flex flex-col gap-2 w-full justify-center items-center mt-4">
                <div className="flex flex-col-reverse items-center">
                    {
                        profileChosen && <div><img src={profile} alt="profile_pic" className=" w-8 h-8 rounded-md mt-2" /></div>
                    }
                    <label htmlFor="profile_pic" className="text-gray-300 text-sm cursor-pointer underline">Upload Profile Pic</label>
                    <input type="file" onChange={(e) => fileInput(e)} name="profile_pic" id="profile_pic" className=" hidden" />
                </div>
                <input type="text" name="username" id="signupusername" placeholder="Username" value={username} onChange={(e) => usernameInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => emailInp(e)} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <input type="password" name="password" id="signuppassword" placeholder="Password" onChange={(e) => passwordInp(e)} value={password} className=" text-sm px-2 py-1 rounded-md outline-none border-2 border-gray-500 bg-slate-800 text-gray-300 " required />
                <button className=" text-sm font-semibold rounded-md text-gray-300 tracking-wider border-[1px] border-purple-800 py-1 px-6 bg-purple-700 hover:bg-purple-500 mt-2" onClick={(e) => signupBtnClick(e)} >SignUp</button>
            </form>
            <button className=" rounded-sm bg-gray-300 text-xs tracking-wider font-semibold py-1 px-2 flex flex-row justify-around items-center hover:bg-purple-200" onClick={() => googleLogin()}>
                <span><FaGoogle /></span>
                <span>Signup with Google</span>
            </button>
        </div>
    )
}   

export default SignupForm;