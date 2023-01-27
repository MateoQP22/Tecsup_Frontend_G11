import React from 'react'
import HeroBanner from '../common/hero/HeroBanner';
import HeroInformation from '../common/hero/HeroInformation';

const ContactHero = ({contactData}) => {
    const {attributes} = contactData;
    console.log(contactData)
  return (
    <>
    <HeroBanner
        image={attributes?.hero.banner.data.attibutes.formats.large.url}
        title={attributes?.hero.titulo}
    />
    <HeroInformation
        subtitle={attributes?.hero.titulo}
        text={attributes?.hero.titulo}
        image={attributes?.hero.titulo}
    />
    </>
  )
}

export default ContactHero