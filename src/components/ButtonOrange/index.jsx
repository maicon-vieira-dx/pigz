import React from 'react'
import style from './ButtonOrange.module.css'

export default function ButtonOrange({children, width}) {
  return (
    <>
        <div className={`${style.buttonOrange} h-10 mr-4 cursor-pointer`} style={{width: width}}>{children}</div>
    </>
  )
}
