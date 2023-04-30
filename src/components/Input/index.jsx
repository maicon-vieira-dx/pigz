import React from 'react'

import { Box } from '@mui/material'

import brazil from 'assets/brazil.png'

import style from './Input.module.css'

export const Input = ({Type, Placeholder, Name}) => {
    return (
        <Box className='mr-5 mt-3 flex justify-center md:justify-start flex-col'>
            <p>{Name}</p>
            <input type={Type} className={style.input} placeholder={Placeholder} style={{width: '100%'}}/>
        </Box>
    )
}

export const InputPhone = ({Name, Placeholder}) => {
    return (
        <Box className='mr-5 mt-3 flex justify-center md:justify-start flex-col'>
            <p>{Name}</p>
            <div className={style.inputPhone}>
                <div className='flex justify-center items-center flex-row w-1/4 h-full rounded-2xl pr-5 mr-2' style={{backgroundColor: '#F0F0F0'}}>
                    <img src={brazil} className='w-8 h-6 ml-5 mr-2' alt='Bandeira do Brasil' />
                    <p>+55</p>
                </div>
                <input type="tel" placeholder={Placeholder} style={{width: '100%'}}/>
            </div>
        </Box>
    )
}

export const InputSelect = ({Name, Placeholder}) => {
    return (
        <Box className='mr-5 mt-3 flex justify-center md:justify-start flex-col'>
            <p>{Name}</p>
            <select className={style.select}>
                <option value="" defaultValue>{Placeholder}</option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
            </select>
        </Box>
    )
}

export default Input;

