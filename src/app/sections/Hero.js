import React from 'react'

const Hero = () => {
    return (
        <header className="mx-auto w-full md:hero-container overflow-hidden">
            <div className="px-a6 py-4 text-center md:text-center">
                <h1 className="text-primary-color-t font-bold text-4xl md:text-7xl leading-10 md:leading-72 tracking-tight mb-6 md:mb-11 mt-[100px] md:mt-[160px]">
                    Гъвкави решения за <br />
                    сухопътен транспорт за <br />
                    всеки клиент
                </h1>
            </div>
            <img className=" md:w-10/12 mx-auto mb-6 md:mt-2 w-80" src="../MainPhoto.png" alt="" />
            
        </header>
    )
}

export default Hero