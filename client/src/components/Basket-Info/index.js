import React from 'react'

const index = () => {
  return (
    <div className='w-80 fixed right-56'>
        <div className='rounded-lg h-fit border mt-2 p-4 px-6'>
        <div className='text-xl font-bold text-gray-600 mb-8'>Sipariş Özeti</div>
        <div className='w-full py-2 flex justify-between text-sm text-gray-500 font-semibold'><span>Ürün Toplamı</span><span>2000 TL</span></div>
        <div className='w-full py-2 flex justify-between text-sm text-gray-500 font-semibold'><span>Kargo Toplamı</span><span>16 TL</span></div>
        <div className='w-full py-2 flex justify-between text-sm text-gray-500 font-semibold'><span>İndirim Tutarı</span><span className='text-main-green'>-48 TL</span></div>
        <hr className='my-3'/>
        <div className='w-full text-xl font-bold flex justify-between'><span className='text-main-green'>TOPLAM</span><span className='px-3 text-main-orange'>2000TL</span></div>
        </div>
        <div className='w-full text-center p-3 bg-main-orange rounded-xl font-bold text-white cursor-pointer my-5'>SİPARİŞİ TAMAMLA</div>
    </div>
  )
}

export default index