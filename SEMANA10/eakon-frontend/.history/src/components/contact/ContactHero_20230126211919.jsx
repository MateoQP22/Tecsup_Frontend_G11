import React from 'react'
import HeroBanner from '../common/hero/HeroBanner';


const ContactHero = ({contactData}) => {
    const {attributes} = contactData;
    console.log(contactData)
  return (
    <>
    <HeroBanner
        image={attributes?.hero.banner.data.attibutes.formts.large.url}
        title={attributes?.hero.titulo}
    />

    </>
  )
}

export default ContactHero