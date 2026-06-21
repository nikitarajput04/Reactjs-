import React from 'react'

function Alert(props) {
  return (
    <div>
       <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
  <span class="block sm:inline"><strong>{props.alert}</strong></span>
</div>

    </div>
  )
}

export default Alert