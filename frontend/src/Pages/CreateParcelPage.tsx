import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import { useStateValue } from '../state/index'
import UploadImage from '../components/UploadImage'
import InputParcelInfo from '../components/InputParcelInfo'
import InputParcelDetails from '../components/InputParcelDetails'
import NextPageNavButton from '../buttons/NextPageNavButton'
import PrevPageNavButton from '../buttons/PrevPageNavButton'
import DisplayRecentParcelPics from '../components/DisplayRecentParcelPics'

///###TODO complete this page
const CreateParcelPage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();


    let pgContext = pageCount

    return (
        <PageLayout>


            <CreateParcelSubheader />
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>

            </section>
            <section className='flex  justify-center pt-6 bg-barrel-green'>
                {pageCount === 0 ? <UploadImage /> : pageCount === 1 ? <InputParcelInfo /> : <InputParcelDetails />}

            </section>
            <section className='flex flex-col justify-center bg-barrel-green py-6'>
                {/* THIS COMPONENT SHOULD ALLOW QUICK SELECTION OF RECENTLY
                OR FREQUENTLY USED ITEMS */}
                <p className='pl-4 font-bold text-white font-hansief'>Top Items</p>

                <DisplayRecentParcelPics />

            </section>

            <div className='flex justify-center w-58 bg-barrel-green pt-5'>

                <PrevPageNavButton />
                <NextPageNavButton />

            </div>





        </PageLayout >
    )
}

export default CreateParcelPage
