import React from 'react'

import { Box } from '@mui/material'

export default function TableComponent({children, columns}) {
  return (
    <Box className="grid gap-8 justify-center items-center" sx={{ gridTemplateColumns: { xs: `repeat(${columns[0]}, minmax(0, 1fr))`, sm: `repeat(${columns[1]}, minmax(0, 1fr))`,  md: `repeat(${columns[2]}, minmax(0, 1fr))`}}}>
        {children}
    </Box>
  )
}
