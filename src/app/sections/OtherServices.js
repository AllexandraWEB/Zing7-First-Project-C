import React from 'react'

const OtherServices = () => {
  return (
    <div className='w-full md:services-container'>
      <h1 className='text-primary-color-t font-bold text-3xl md:text-5xl mt-5 ml-5 md:ml-0 md:pt-[70px] py-5 md:py-9 mb-0 md:mb-7'>Други услуги</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <div className='md:w-1/3 mb-4 md:mb-6 mt-4 md:mt-0'>
         <img className="rounded-lg" src="../Other-Services-1.png" alt="" />
         <p className='text-primary-color-t font-semibold text-[24px] pb-4 md:pb-9 mt-3 md:mt-5'>Опасни товари (ADR)</p>
        </div>
        <div className='md:w-1/3 mb-4 md:mb-6 mt-4 md:mt-0'>
         <img className="rounded-lg" src="../Other-Services-2.png" alt="" />
         <p className='text-primary-color-t font-semibold text-[24px] pb-4 md:pb-9 mt-3 md:mt-5'>Хладилен транспорт</p>
        </div>
        <div className='md:w-1/3 mb-4 md:mb-6 mt-4 md:mt-0'>
         <img className="rounded-lg" src="../Other-Services-3.png" alt="" />
         <p className='text-primary-color-t font-semibold text-[24px] pb-4 md:pb-9 mt-3 md:mt-5'>Извънгабаритни товари</p>
        </div>
      </div>
    </div>
  )
}

export default OtherServices

