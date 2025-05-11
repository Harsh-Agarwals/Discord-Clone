import { FaDownload } from "react-icons/fa6";

interface Photos {
    img: string
}

interface PhotosType {
    photos: Photos[]
}

function SharedPhotos({ photos }: PhotosType) {
    function downloadImg(imgname: string) {
        const link = document.createElement("a");
        link.href = imgname;
        link.download = imgname.slice(imgname.lastIndexOf("/")+1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className=" flex flex-wrap flex-row gap-2">
            {
                photos.map(photo => {
                    return (
                        <div key={Math.random()} className=" relative">
                            <img src={photo.img} alt={"photo"} className=" w-10 h-10" />
                            <button className=" absolute top-6 left-6 border-[1px] border-slate-700 text-slate-950" onClick={() => downloadImg(photo.img)}><FaDownload /></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SharedPhotos;