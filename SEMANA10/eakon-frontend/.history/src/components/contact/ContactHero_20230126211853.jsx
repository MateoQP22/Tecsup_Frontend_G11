import React from 'react'
import HeroBanner from '../common/hero/HeroBanner';

const ContactHero = ({contactData}) => {
    const {attributes} = contactData;
    console.log(contactData)
  return (
    <>
      <HeroBanner
        image={attributes?.hero.banner.data.attributes.formats.large.url}
        title={attributes?.hero.titulo}
      />
    </>
  )
}

export default ContactHero