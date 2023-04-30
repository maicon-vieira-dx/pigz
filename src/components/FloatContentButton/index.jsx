import React from 'react'

import ButtonOrange from 'components/ButtonOrange'

export default function FloatContentButton({Title, Subtitle, List, Info, Button}) {
  return (
    <>
        <div className="bg-light-gray rounded-3xl w-auto h-auto mt-0 md:mt-28" style={{borderRadius: '3rem'}}>
            <div className='py-5 px-10 flex w-full h-full justify-center items-start md:items-center text-start md:text-center flex-col'>
                <div className='pb-5'>
                    <h3 className='text-2xl md:text-3xl text-black font-bold'>{Title}</h3>
                    <p className='text-dark-gray font-medium'>{Subtitle}</p>
                </div>
                <div className='flex justify-center items-start'>
                    <ul>
                        {
                            List.map((item) => (
                                <li className='pb-2 text-black' key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='py-8'>
                    <p className='font-bold px-6 py-2 rounded-3xl bg-white'>{Info}</p>
                </div>
                <div className='pb-3'>
                    <ButtonOrange width="100%">{Button}</ButtonOrange>
                </div>
            </div>
        </div>

    </>
  )
}
