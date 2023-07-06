
function Input() {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      alert(event.target.value);
    }
  
    return (
      <>
        <h1>Digite o seu primeiro nome:</h1>
        <input name="firstName" onChange={(event) => handleChange(event)} />
      </>
    );

}

export default Input;