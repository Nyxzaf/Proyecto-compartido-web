import { Card, CardMedia, Stack, Avatar } from '@mui/material'
import React from 'react'
import Photo from '../svg/plazavea.svg'
import { red } from '@mui/material/colors'


const SecondLane = () => {
  return (
    <div>
      <Stack style={{background:"red"}}>
      <Avatar
        src={Photo}
        alt="Imagen de ejemplo"
        sx={{ width: 40, height: 40 }}
      />
      </Stack>
    </div>
  )
}

export default SecondLane
