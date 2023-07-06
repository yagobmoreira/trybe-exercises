function Button() {
  function handleClick() {
    alert('Clicou');
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