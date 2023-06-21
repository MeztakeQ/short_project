import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>Средство   <br></br> <span> для сокращения URL-адресов</span></h1>
      <div>
        <input
          type="text"
          placeholder="Вставьте ссылку, чтобы сократить ее"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>сократить</button>
      </div>
    </div>
  )
}

export default InputShortener