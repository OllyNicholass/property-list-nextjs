import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/PropertyListItem.module.css'
import moment from 'moment'
import { Property } from '../../interfaces/property'
import PropertyEdit from './PropertyEdit'
import { Paper, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Chip, Modal, Box, Fade, Backdrop, Stack } from '@mui/material'
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

type Props = {
  property: Property
}

const formatPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const IconGroup = ({iconComponent, value}: any) => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '1rem'
      }}>
        <Box sx={{
          marginRight: '.5rem'
        }}>{iconComponent}</Box>
        <Box sx={{
          fontSize: '1rem'
        }}>{value}</Box>
      </Box>
    </>
  )
}

const PropertyListItem = ({ property }: Props) => {
  const [open, setOpen] = useState(false);
  const [cardDepth, setCardDepth] = useState(4)
  const [saved, setSaved] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSave = () => setSaved(true);
  const handleUnsave = () => setSaved(false);

  const SaveButton = ({isSaved}: any) => {
    return (
      <>
        <Button
          size="small"
          color="inherit"
          startIcon={isSaved ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
          onClick={() => {
            if (isSaved) {  
              handleUnsave()
            }
            else {
              handleSave()
            }
          }}
        >
          {isSaved ? 'Remove' : 'Save'}
        </Button>
      </>
    )
  }

  return (
    <>
      <Paper
        elevation={cardDepth}
        onMouseOver={() => setCardDepth(8)}
        onMouseOut={() => setCardDepth(4)}
      >
        <CardActionArea>
          <Link href="/properties/[id]" as={`/properties/${property.id}`}>
            <a>
              <CardMedia
                component="img"
                height="140"
                image={property.imageUrl}
                alt={property.name}
                sx={{
                  filter: property.isActive ? 'grayscale(0)' : 'grayscale(1)',
                  position: 'relative'
                }}
              />
              {
                property.justAdded
                ? 
                  <Chip
                    label="Just Added"
                    color="info"
                    sx={{
                      position: 'absolute',
                      top: '.5rem',
                      left: '.5rem'
                    }}
                  />
                : 
                  null
              }

              {
                property.isActive
                ?
                  null
                :
                  <Chip
                    label="Expired"
                    color="warning"
                    sx={{
                      position: 'absolute',
                      top: '.5rem',
                      right: '.5rem'
                    }}
                  />
              }
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {formatPrice.format(property.askingPrice)}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {property.address.street + ', ' + property.address.city}
                </Typography>
                <Box
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <IconGroup
                     iconComponent={<HotelRoundedIcon />}
                     value={property.bedrooms}
                  />
                  <IconGroup
                     iconComponent={<BathtubRoundedIcon />}
                     value={property.bathrooms}
                  />
                  <IconGroup
                     iconComponent={<ChairRoundedIcon />}
                     value={property.receptions}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" mt={'1rem'}>
                  {moment(property.createdDate).format('[Listed on:] Do MMM YYYY')}
                </Typography>
              </CardContent>
            </a>
          </Link>
        </CardActionArea>
        <CardActions
          sx={{
            display: 'flex'
          }}
        >
          <Button
            size="small"
            onClick={handleOpen}
            sx={{
              marginRight: 'auto'
            }}
          >
            Edit
          </Button>

          <SaveButton isSaved={saved} />

          <Button
            size="small"
            color="inherit"
            onClick={() => {
              alert('Nope, not implemented')
            }}
          >
            Share
          </Button>
        </CardActions>
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <PropertyEdit property={property} />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default PropertyListItem
