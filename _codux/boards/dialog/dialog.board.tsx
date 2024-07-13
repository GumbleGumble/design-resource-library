import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { Dialog } from '../../../components/ui/dialog'

export default createBoard({
  name: 'Dialog',
  Board: () => <Dialog></Dialog>,
  isSnippet: true
})
