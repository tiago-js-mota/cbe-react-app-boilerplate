import { Button } from 'react-libs-cbe'
import 'react-libs-cbe/dist/esm/index.css'

export const Counter = () => {
  return (
    <div>
      <h3>Use Button from library</h3>
      <Button actionType={'primary'} label={'Teste'} />
    </div>
  )
}
