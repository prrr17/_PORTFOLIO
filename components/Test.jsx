import Link from 'next/link'
import React from 'react'
import PLogo from '../public/p_logo.svg'


// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
    <PLogo width='10rem' height='inherit'></PLogo>
    </a>
  )
})

function Test() {
  return (
    <Link href="/" passHref>
      <MyButton />
    </Link>
  )
}

export default Test