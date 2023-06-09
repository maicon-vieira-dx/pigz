import React from 'react'

import logo from 'assets/Pigz Gestão - Logo@2x.png'

import ButtonOrange from 'components/ButtonOrange'

import style from './Header.module.css'

export default function Header({Button}) {
  return (
    <div className={style.header}>
        <div className='w-full py-3 flex items-center justify-between'>
            <div className='md:px-24'>
                <img src={logo} className={style.logo} alt='Logo Pigz'/>
            </div>
            <div className='md:px-24'>
                <ButtonOrange width="95%">{Button}</ButtonOrange>
            </div>
        </div>
    </div>
  )
}
