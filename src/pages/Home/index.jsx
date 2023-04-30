import React from 'react'

import { WhatsApp } from '@mui/icons-material'
import { Container } from '@mui/material'

import FloatContent from 'components/FloatContent'
import FloatContentButton from 'components/FloatContentButton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HeroBanner from 'components/HeroBanner'
import TableComponent from 'components/TableComponent'
import TabsComponent from 'components/TabsComponent'

import data from 'mocks/data'

import pigzpigz from 'assets/Grupo 3535@2x.png'
import pigzpigzMobile from 'assets/Grupo 3535.png'

export default function Home() {
  return (
    <>
      <div className='flex flex-col'>
        <Header {...data.Header}/>
        <HeroBanner {...data.Banner} />
        <Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingInline: {xs: '2.5rem', md: '1rem'}}}>
          <picture>
              <source srcSet={pigzpigzMobile} media="(max-width: 768px)" />
              <img src={pigzpigz} className='top-0 left-1/2 -translate-y-1/2' alt='Pigz' />
          </picture>
          <div className='w-full flex justify-center'>
            <h2 className='text-black font-bold text-4xl md:text-4xl text-center pb-10 md:pb-0 px-5'>{data.Facilities.Title}</h2>
          </div>
          <TableComponent columns={[1,2,4]}>
            {
              data.Facilities.GridBoxs.map((box) => (
                <FloatContent {...box} key={box.Title} />
              ))
            }
          </TableComponent>
          <div className='mt-20 md:mt-40 flex justify-center items-center flex-col text-center'>
            <h4 className='text-black font-bold text-4xl'>{data.Market.Title}</h4>
            <p className='text-black pt-8'>{data.Market.Subtitle}</p>
          </div>
          <TabsComponent GridBoxs={data.Market.GridBoxs}/>
          <div className='mt-0 md:mt-40 flex justify-center items-center flex-col text-center'>
            <h4 className='text-black font-bold text-4xl'>{data.Products.Title}</h4>
            <p className='text-black py-8 md:pt-8'>{data.Products.Subtitle}</p>
            <TableComponent columns={[1,2,2]}>
              {
                data.Products.GridBoxs.map((box, index) => (
                  <FloatContentButton {...box} key={index}/>
                ))
              }
            </TableComponent>
          </div>
          <div className='w-full flex justify-center items-center py-20'>
            <p className='font-medium'>{data.Contact.Text} <WhatsApp sx={{marginLeft: 2}}/> <span className='text-xs' >{data.Contact.Prefix}</span> {data.Contact.Number}</p>
          </div>
        </Container>
        <Footer {...data.Footer} />
      </div>
    </>
  )
}
