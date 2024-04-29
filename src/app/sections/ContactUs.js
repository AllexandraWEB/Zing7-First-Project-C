import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-contact-color w-full p-4'>
      <div className='contact-container text-center md:text-center pb-3 md:pb-[70px]'>
        <h1 className='text-white font-bold text-3xl md:text-7xl leading-10 md:leading-72 tracking-tight mb-6 md:mb-7 mt-[30px] md:mt-[50px]'>Готови ли сте да работим заедно?</h1>
        <p className='text-white text-base md:text-[20px]'>Оставете башият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси</p>    
        <div className="bg-white rounded-lg w-[330px] md:w-[380px] mb-7 mt-6 md:mt-9 m-auto">
                <form className="flex">
                    <div className="flex-1 ">
                      <label htmlFor="phone" className="sr-only">Мобилен телефон</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 4a1 1 0 011-1h14a1 1 0 011 1v2l-8 4-8-4V4zm0 3l8 4 8-4v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7z" />
                                </svg>
                            </span>
                            <input type="tel" id="phone" name="phone" placeholder="Мобилен телефон"
                            
                                className="w-full pl-10 pr-3 py-5 rounded-lg" />
                        </div>
                     </div>
                    <div>
                        <button type="submit" className="bg-contact-btn text-contact-color text-bold py-5 px-7 rounded-r-lg">Изпрати</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
  )
}

export default ContactUs