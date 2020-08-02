import React from "react"
import PropTypes from "prop-types"

function debounce(fn, defer) {
  let timer;
  return function() {
    clearInterval(timer)
    let args = arguments;
    timer = setTimeout(() => fn.apply(this, args), defer)
  }
}

function InputText({ onChange, defer }) {
  function onTextChange(e) {
    e.persist();
    debounce(onChange, defer)(e)
  }

  return <input type="text" onChange={onTextChange} />
}

InputText.defaultProps = {
  defer: 500
}

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  defer: PropTypes.Number
}

export default React.memo(InputText)