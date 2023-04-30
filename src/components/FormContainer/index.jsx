import React, { useState } from 'react'

import { Box } from '@mui/material'

import ButtonOrange from 'components/ButtonOrange'

export default function FormContainer({Form}) {
  const [ content, setContent] = useState(Form[0])
  let count = 0
  const handleSubmit = (event) => {
    setContent(() => {
      count++
      return Form[count]
    })
  }
  return (
    <Box className='bg-white rounded-3xl mt-10 ml-7 md:ml-28 mb-40 z-10 relative' sx={{width: { xs: '85%', sm: '80%', md: '28rem'}}}>
        <div className='py-3 px-5 flex justify-center items-start flex-col'>
        <h4 className='md:text-3xl text-2xl font-semibold mt-10 md:mt-10'>{content.Title}</h4>
        <p className='text-xs md:text-lg text-start'>{content.Subtitle}</p>
        <form className='w-full'>
                <div className="grid grid-cols-1 md:grid-5 justify-center items-center md:items-start">
                {
                  content.Label.map((item, index) => {
                    if(!item.Split){
                        let Element =  item.Input.Component
                        return (
                          <Element {...item.Input} key={`input-${index}`}/>
                        )
                      }else{
                        return (
                          <div className='grid grid-cols-2 justify-center items-center' key={`split-${index}`}>
                            {
                              item.Input.map((el, subIndex) => {
                                let Elements = el.Component
                                return (
                                  <Elements {...el} key={`input-${index}-sub-${subIndex}`} />
                                )
                              })
                            }
                          </div>
                        )
                      }
                  })
                }

                </div>
                <div className='flex justify-center items-start flex-col text-start pt-3 pr-3'>
                    <p>{content.Text}</p>
                    <div className='w-full py-5' onClick={() => handleSubmit()}>
                        <ButtonOrange width='100%'>{content.Button}</ButtonOrange>
                    </div>
                </div>
        </form >
        </div>
    </Box>
  )
}
