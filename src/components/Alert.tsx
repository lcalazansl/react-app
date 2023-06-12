// rafce short cut using ES7+ extension

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Alert
