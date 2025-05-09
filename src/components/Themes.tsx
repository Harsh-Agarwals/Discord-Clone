import { useEffect, useRef, useState } from 'react';
import { themes } from '../utils';
import ThemeButton from './ThemeButton';

function Themes() {
    const [video, setVideo] = useState(themes[0]);
    const videoRef = useRef<HTMLVideoElement>(null);
    function clickBtn(theme: string) {
        setVideo(theme);
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [video])

    return (
        <div>
            <div className=" relative h-screen w-screen overflow-hidden">
                <video ref={videoRef} loop autoPlay muted className="absolute w-auto min-w-full h-auto min-h-full max-w-none">
                    <source src={video} type="video/mp4" />
                </video>
                <div className='absolute flex flex-row gap-2 sm:gap-4 items-center justify-center left-[50%] translate-x-[-50%]'>
                    {
                        themes.map((theme) => (
                            (
                                <div key={theme} className=' rounded-xl'>
                                    {<ThemeButton theme={theme} btnClick={clickBtn} />}
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Themes;