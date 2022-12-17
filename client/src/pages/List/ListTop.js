import React from 'react'

const ListTop = () => {
  return (
    <div className='w-full p-3 flex items-center justify-between'>
        <span className='p-4 text-xl font-bold text-gray-500'>306 Sonuç Bulundu</span>
        <select className='border-2 w-48 py-2 px-1 rounded-md font-semibold text-gray-500'>
            <option disabled>Sıralama Seç</option>
            <option>Çok Satanlar</option>
            <option>Fiyat Artan</option>
            <option>Fiyat Azalan</option>
            <option>Puan</option>
            <option>En Yeni</option>
        </select>
    </div>
  )
}

export default ListTop