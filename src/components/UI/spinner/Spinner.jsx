import './spinner.scss'

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}