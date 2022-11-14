import * as React from 'react'

import { Property } from '../../interfaces/property'

type Props = {
  property: Property
}

const PropertyAddress = ({ property }: Props) => (
  <div>
    <h1>Detail for {property.name}</h1>
    <p>ID: {property.id}</p>
    <p>Address: {property.address.street}</p>
  </div>
)

export default PropertyAddress
