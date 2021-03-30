import { useState } from 'react'

export default (InitialVal: any) => {
 const [value, setValue] = useState(InitialVal);
 const handleChange = (e: any) => {
  setValue(e.target.value)
 }
 const reset = () => {
  setValue("")
 }
 return [value, handleChange, reset];
}