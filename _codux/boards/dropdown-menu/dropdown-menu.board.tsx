import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { DropdownMenu } from '../../../components/ui/dropdown-menu'

export default createBoard({
  name: 'DropdownMenu',
  Board: () => <DropdownMenu />,
  isSnippet: true
})
