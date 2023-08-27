import './button.scss'

export const BUTTON_THEME = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export const Button = ({children, buttonTheme, ...otherProps}) => {
  return (
    <button 
      className={`button-container ${buttonTheme ? buttonTheme : ''}`} 
      {...otherProps}
    >
      {children}
    </button>
  )
}