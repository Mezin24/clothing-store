import { memo } from 'react'
import './formInput.scss'

export const FormInput = memo(({label, ...otherProps}) => {
  return (
    <div className="group">
      <label className={`form-input-label ${otherProps?.value?.length ? 'shrink' : ''}`}>
        {label}
      </label>
      <input className="form-input" {...otherProps} />
    </div>
  )
})