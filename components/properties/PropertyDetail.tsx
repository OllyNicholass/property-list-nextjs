import * as React from 'react'
import Image from 'next/image'

import { Property } from '../../interfaces/property'

type PropertyDetailProps = {
  property: Property
}

const PropertyDetail = ({ property }: PropertyDetailProps) => (
  <div>
    
    <h1>Detail for {property.name}</h1>
    <h2>Don&apos;t look at me! I&apos;ve not been styled</h2>
    <p>ID: {property.id}</p>
    <p>Address: {property.address.street}</p>
    {property.isActive.toString()}
    <Image
        src={property.imageUrl}
        alt={property.name}
        width={500}
        height={500}
      />
  </div>
)

export default PropertyDetail
