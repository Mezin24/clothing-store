import './formInput.scss'

export const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="group">
      <label className={`form-input-label ${otherProps?.value?.length ? 'shrink' : ''}`}>
        {label}
      </label>
      <input className="form-input" {...otherProps} />
    </div>
  )
}