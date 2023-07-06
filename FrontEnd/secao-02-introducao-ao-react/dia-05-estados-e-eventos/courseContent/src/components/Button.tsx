function Button() {
  function handleClick() {
    alert('Meu primeiro event handler com React')
  }

  return (    
    
    <div>
      <button onClick={handleClick}>
        Clique em mim!
      </button>
    </div>
  )
}

export default Button;