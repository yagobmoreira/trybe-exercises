type InputProps = {
  onChange: () => void
}

function Input({ onChange }: InputProps) {

  return (
    <input onChange={onChange} type="text" name="" id="" placeholder="Digite algo"/>
  )

}

export default Input;