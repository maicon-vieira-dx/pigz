import React from 'react'

import logogray from 'assets/pigz-logotipo-colorido.png'
import contactus from 'assets/icone-fale-conosco.png'
import logoorange from 'assets/logo-orange-horizontal-branco.png'

import './FloatContentButton.css'

export default function Footer({Text, Download, About, ContactUs, Networks, Copyright}) {
  return (
    <footer className='bg-light-gray border-orange' style={{borderBottomWidth: '0.4180rem'}}>
        <div className='px-5 md:px-10'>
            <div className='grid justify-between grid-cols-1 md:grid-cols-3 items-start pt-6'>
                <div>
                    <div>
                        <img src={logogray} alt="Logo cinza" className='w-12 h-6'/>
                        <span className='text-xs text-dark-gray'>{Text}</span>
                    </div>
                    <div className='mt-8 md:pt-16'>
                        <h5 className='font-semibold text-dark-gray'>{Download.Title}</h5>
                        <div className='flex justify-start items-center flex-row pt-5'>
                            {
                                Download.Icons.map((item) => (
                                    <img src={item} className='mr-2 w-20 h-7' alt='Lojas' key={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className='font-semibold text-dark-gray mt-14 md:mt-0 pb-5'>{About.Title}</h5>
                    <ul>
                        {
                            About.List.map((item, index) => (
                                <li className='text-dark-gray pb-5' key={item + index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h5 className='font-semibold text-dark-gray mt-14 md:mt-0 pb-5 flex'><img src={contactus} alt='Ícone de contato' className='mr-3'/>{ContactUs.Title}</h5>
                    <ul>
                        {
                            ContactUs.List.map((item, index) => (
                                <li className='text-dark-gray pb-5' key={item + index}>{item}</li>
                            ))
                        }
                    </ul>
                    <h5 className='font-semibold text-dark-gray pb-5'>{Networks.Title}</h5>
                    <div className='flex justify-start items-center flex-row'>
                        {
                            Networks.List.map((item, index) => (
                                <img src={item} key={item + index} className='mr-4 w-7 h-7' alt='Logos redes' />
                            ))
                        }
                    </div>
                </div>
            </div>
                <div className='flex justify-between items-start md:items-center my-8 border-medium-gray flex-col md:flex-row' style={{borderTopWidth: '0.0836rem'}}>
                    <div className='mt-5'>
                        <ul className='flex'>
                            {
                                Copyright.List.map((item, index) => (
                                    <li className='mr-5' key={item + index}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='mt-5 flex justify-center items-center flex-row'>
                        <p className='text-dark-gray mr-3 md:mr-6 smallText'>{Copyright.Text}</p>
                        <img src={logoorange} alt='Logo Orange' className='w-16 h-4'/>
                    </div>
                </div>
        </div>
    </footer>
  )
}
