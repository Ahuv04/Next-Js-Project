import Image from 'next/image'
import Link from 'next/link'

export const metadata ={
    title : " Page not found"
}

export default function NotFound() {
  return (
    <div className='px-2-w-full'>
      <h2 className='text-2xl'>Page not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  )
}