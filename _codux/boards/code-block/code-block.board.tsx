import React from 'react'
import { createBoard } from '@wixc3/react-board'
import { CodeBlock } from '../../../components/ui/codeblock'

export default createBoard({
  name: 'CodeBlock',
  Board: () => <CodeBlock language="typescript" value="code goes here" />,
  isSnippet: true
})
