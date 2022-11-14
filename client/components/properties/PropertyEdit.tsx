import React from 'react'

import { Property } from '../../interfaces/property'
import { FormGroup, FormControl, FormLabel, FormControlLabel, Checkbox } from '@mui/material'
import axios from 'axios'

type Props = {
  property: Property
}

const PropertyEdit = ({ property }: Props) => {
  const [isActive, setChecked] = React.useState(property.isActive);

  const handleIsActiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    property.isActive = event.target.checked;
    setChecked(event.target.checked);
    updatePropertyData(`${process.env.API_ENDPOINT}/properties/${property.id}`, property)
  };

  const updatePropertyData = async (endpoint: string, property: Property) => {
    try {
      const result = await axios.put<Property>(endpoint, property)
      return result.data
    } catch (err) {
      // TS doesn't support type annotations on the catch variable
      let errMessage = (err as Error).message;
      throw new Error(errMessage);
    }
  }

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{property.id}: {property.name}</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="isActive"
            control={
              <Checkbox
                checked={isActive}
                onChange={handleIsActiveChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Is Available"
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
    </>
  )
}

export default PropertyEdit
