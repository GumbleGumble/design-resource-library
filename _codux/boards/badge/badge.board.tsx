import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { Badge } from '../../../components/ui/badge'

export default createBoard({
  name: 'Badge',
  Board: () => <Badge />,
  isSnippet: true
})
