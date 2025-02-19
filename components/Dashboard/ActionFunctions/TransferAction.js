
import Image from 'next/image';
import {BsSendFill} from 'react-icons/bs'
import {Select, SelectItem} from "@nextui-org/react";


export default function TransferFuntion (){
    return (
      <div className='mt-3 flex flex-col gap-2 mx-4 pb-3'> 
        <div className='text-white flex flex-col px-4 ' >
          <label className='opacity-50 text-xs'>Token</label> 
          <Select className='bg-prm-bg h-8 flex my-auto items-center w-80 border border-offwhite rounded-md text-sm' size="sm" placeholder="Select token" radius='md'>
          {data.map((datas)=>(
            <SelectItem key={datas.token} value={datas.token} className='bg-prm-bg'>
              <div className='text-sm text-white flex items-center gap-4'>
                <Image src={datas.image} width={20} height={20} alt=''/>
                {datas.token}
              </div>
            </SelectItem>
          ))}
  
          </Select>
        </div>
        <div className='text-white flex flex-col px-4 ' >
          <label className='opacity-50 text-xs'>Receipient</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='Address' />
        </div>
        <div className='text-white flex flex-col px-4 ' >
          <label className='opacity-50 text-xs'>IBAN <span className='ml-2 opacity-50'>Required only for FIAT transfers</span></label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='Bank account number' />
        </div>
        <div className='grid grid-cols-5 items-end'>
        <div className='text-white flex flex-col px-4 col-span-2 ' >
          <label className='opacity-50 text-xs'>Amount</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='0.00' />
        </div>
        <div className='col-span-1 text-white text-center text-xl'>
          =
        </div>
        <div className='text-white flex flex-col px-4 col-span-2' >
          <label className='opacity-50 text-xs '>FIAT Value</label> 
         <input type='text'  className='border border-offwhite rounded-md text-white text-sm w-full bg-prm-bg px-2 py-1' placeholder='USD' />
        </div>
        </div>
        <div className='flex gap-3 items-center bg-[#313131] rounded-full text-offwhite mt-2 py-1 justify-center'>
              Send <BsSendFill/>
            </div>
      </div>
  
    )
  }
  
  const data = [
    {
      token:"BTC",
      image:'/assets/btc.png'
    },
    {
      token:"BTC",
      image:'/assets/btc.png'
    },
    {
      token:"BTC",
      image:'/assets/btc.png'
    },
    {
      token:"BTC",
      image:'/assets/btc.png'
    }
  ]