import "../styles/input.scss";

function Input({ type, name, id, value, defaultChecked, disabled, onChange, children}){
    return (
        <div className={`inp-${type}`}>
            <input 
                type = {type}
                name = {name}
                id = {id}
                value = {value}
                defaultChecked = {defaultChecked}
                disabled = {disabled}
                onChange = {onChange}
            />
            <label htmlFor={id}  className="inp-label" >
                {children}
            </label>
        </div>
    )
}

export default Input;