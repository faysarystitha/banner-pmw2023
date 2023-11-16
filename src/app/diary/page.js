'use client'

import '@app/diary/diary.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Diary() {

    const [judul, setJudul] = useState([])
    const [isiDiary, setIsiDiary] = useState([])

    const endpointAPI = 'https://6555c0de84b36e3a431e3efd.mockapi.io/diaryku'
    
    async function getDiary() {
        const res = await axios.get(endpointAPI)
        const data = res.data

        const judul = data.map((item) => (item.judul))
        setJudul(judul)

        const isiDiary = data.map((item) => (item.isi_diary))
        setIsiDiary(isiDiary)

        console.log(judul, isiDiary)
    }

    useEffect(() => {
        getDiary()
    }, [])
    
  return (
    <div>
        {judul.length>0 ? (
            <ul>
                {judul.map((item, index) => (
                    <li>
                        <div className='diary-container'>
                            <h1>{judul[index]}</h1>
                            <p className='p-diary'>{isiDiary[index]}</p>
                        </div>
                    </li>
                ))}
            </ul>
        ) : ('API not loading')}
    </div>
  )
}
