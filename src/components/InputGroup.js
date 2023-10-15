import "../styles/input.scss";

function InputGroup({ addClass, legend, children}){
    return (
        <fieldset className={addClass}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    )
}

export default InputGroup;