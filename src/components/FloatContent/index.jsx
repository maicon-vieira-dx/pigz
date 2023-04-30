import React from 'react'

import style from './FloatContent.module.css'

export default function FloatContent({Title, Paragraph, Icon}) {
  return (
    <>
        <div className={`${style.float} bg-light-gray w-60 h-60 mt-0 md:mt-28`} style={{borderRadius: '3rem'}}>
            <div className='p-5 flex w-full h-full justify-center items-center text-center flex-col'>
                <img src={Icon} alt="Ícone"/>
                <h4 className='text-xl text-black font-bold'>{Title}</h4>
                <p className='text-black'>{Paragraph}</p>
            </div>
        </div>

    </>
  )
}
