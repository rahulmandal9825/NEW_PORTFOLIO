import SectionSvg from '@/public/svg/SectionSvg';
import React from 'react'

interface SectionPorps{
    className: string;
    id: string;
    crosses: boolean;
    crossesOffset: any;
    customPadding: string;
    children: React.ReactNode;
}

const Section = ({className , id ,crosses, crossesOffset ,customPadding, children}:SectionPorps) => {
  return (
    <div id={id} className={`relative ${customPadding || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : " " } ${className|| " "}`}`}>
       {children}
    </div>
  )
}

export default Section
