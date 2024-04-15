import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
          <div className="flex-1 justify-center flex flex-col">
              <h2 className='text-2xl'>Want to learn more about JavaScript?</h2>
              <p className='text-gray-500 my-2'>Check these resources with 100 JavaScript Projects</p>
              <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'><a href="https://www.youtube.com/watch?v=Kkht2mwSL_I&t=20268s" target='_blank' rel='noopener noreferrer'>100 JavaScript Projects</a></Button>
          </div>
          <div className="p-7 flex-1">
              <img src="https://img.freepik.com/free-vector/design-business-landing-page-with-laptop_23-2148340662.jpg?t=st=1713186512~exp=1713190112~hmac=52d5f467d45818ca7987630ce5841c8d4549637bdeb1cd9d3a4e5d5dbf5eca5a&w=1380"/>
          </div>
    </div>
  )
}
