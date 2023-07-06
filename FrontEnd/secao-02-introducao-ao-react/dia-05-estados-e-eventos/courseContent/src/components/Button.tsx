function Button() {
  function handlerClick() {
    alert('Meu primeiro event handler com React')
  }

  return (    
    <button onClick={handlerClick}>
      Clique em mim!
    </button>
  )
}

export default Button;