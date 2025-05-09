interface themeType {
    theme: string,
    btnClick: Function
}

function ThemeButton({ theme, btnClick }: themeType) {
    return (
        <div className=" my-4">
             <button onClick={() => btnClick(theme)}>
                <video loop autoPlay muted className="h-full w-16 md:w-16 rounded-md border-white border-2 hover:border-black">
                    <source src={theme} type="video/mp4" />
                </video>
             </button>
        </div>
    )
}

export default ThemeButton;