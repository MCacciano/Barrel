import React, { FC } from 'react'
import RouteFlag from './RouteFlag'
import RouteInfoCard from './RouteInfoCard'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'


const RouteDetailsCardSmCourrierView: FC = () => {

    const url = [prflag, americanflag]

    return (
        <div className='flex'>
            <figure className='w-8  basis-1/2 border-2 '>
                <RouteFlag url={url[0]} />
                <RouteFlag url={url[1]} />

            </figure>
            <div className=' basis-1/2 border-2'>
                <RouteInfoCard />
            </div>
        </div>
    )
}

export default RouteDetailsCardSmCourrierView
