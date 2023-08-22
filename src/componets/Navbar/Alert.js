import React from 'react'

  const Alert = ({alert}) => {
  return (
    alert !== null && (
        <div className={`alert alert-${alert.type} container mt-2`}>
             <i className="fas fa-info-circle fa-lg"></i> {alert.msg}
        </div>
    )
  )
}

export default Alert; 
