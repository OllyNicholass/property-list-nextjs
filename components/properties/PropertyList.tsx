import * as React from 'react'
import PropertyListItem from './PropertyListItem'
import { Property } from '../../interfaces/property'
import styles from '../../styles/PropertyList.module.css'

type Props = {
  propertyList: Property[]
}

const PropertyList = ({ propertyList }: Props) => {
  return (
    <>
      <div className={styles.property_list_wrap}>
        {propertyList.map((property) => (
            <div className={styles.property_list_item} key={property.id}>
              <PropertyListItem
              property={property}
            />
            </div>
        ))}
      </div>
    </>
  )
}

export default PropertyList
