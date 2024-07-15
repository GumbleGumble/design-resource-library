import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { AlertDialog } from '../../../components/ui/alert-dialog'

export default createBoard({
  name: 'AlertDialog',
  Board: () => <AlertDialog></AlertDialog>,
  isSnippet: true
})
