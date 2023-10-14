import "../styles/input.scss";

function RadioGroup({ addClass, legend, children}){    
    return (
        <fieldset className={addClass}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    )
}

export default RadioGroup;