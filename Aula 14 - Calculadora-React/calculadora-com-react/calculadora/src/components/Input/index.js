import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
        <InputContainer className="Input">
            <input disabled={true} value={value}/>
        </InputContainer>
    )
}

export default Input;