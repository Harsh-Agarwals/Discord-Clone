import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

const metadata = {
    contentType: 'image/jpeg'
};

async function upload(file: File | null): Promise<string | null> {
    if (!file) return null;
    const storageRef = ref(storage, `images/profile_pic/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    return new Promise((resolve, reject) => {
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
                console.log(error.code);
                reject(null);
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object")
                        break;
                    case 'storage/canceled':
                        console.log("User canceled the upload")
                        break;
                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect error.serverResponse")
                        break;
                }
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                resolve(downloadURL);
              });
            }
          );
    })
}

export default upload;
