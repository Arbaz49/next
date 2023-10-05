import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import Head from 'next/head';
import Test from "../Components/Test"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
    <title>
      Home-page
    </title>
   </Head>

   
   <Header/>
   <h1 style={{marginTop:"100px"}}>Home Page</h1>

   </>
  )
}
