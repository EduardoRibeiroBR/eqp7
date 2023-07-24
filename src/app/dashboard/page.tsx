'use client'

import { Form } from '@/components/Form'
import { Logo } from '@/components/Logo'
import { SideBar } from '@/components/SideBar'
import { Waves } from '@/components/Waves'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

export default function dashboard() {

  return (
    <div>
      <div className='absolute top-0'>
        <Logo />
      </div>
      
      <div className='h-screen w-screen flex justify-center'>
      
      
        <SideBar />
        
        <div id='RightSide' className='mt-10'>
          <div id="" className=''>
            
            <h1>Posts</h1>
          
          </div>


        </div>
      
      </div>

    </div>
    
  )
}
