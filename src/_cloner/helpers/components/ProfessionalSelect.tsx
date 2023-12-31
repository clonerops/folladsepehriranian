import React, { useState } from 'react'
import Select, { StylesConfig } from 'react-select'

const ProfessionalSelect = (props: any) => {

    const [inputValue, setInputValue] = useState("");


  const handleKeyDown = (event: any) => {
    if (event.key === ' ' && !inputValue) {
      event.preventDefault() // Prevent space from being entered in the search input
      setInputValue(' ') // Set the search input value to a space
    }
  }
  const handleInputChange = (value: any) => {
    setInputValue(value)
  }

  const customFilterOption = (option: any, rawInput: any) => {
    const inputValue = rawInput.trim().toLowerCase()
    const inputCharacters = inputValue.split('')

    return inputCharacters.every((char: any) => {
      return option.label.toLowerCase().includes(char)
    })
  }

  const customStyles: StylesConfig = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    height: 18,
    border: state.isFocused ? "1px solid #d1d5db" : "1px solid #d1d5db",
    boxShadow: state.isFocused ? "0px 0px 4px #000256" : "none",
    // "&": {
    //   border: "1px solid #cccccc",
    //   boxShadow: "none"
    // },
    "&:hover": {
      // border: "1px solid #ff8b67",
      // boxShadow: "0px 0px 6px #ff8b67"
    }
    // "&:focus": {
    //   border: "1px solid #ff8b67",
    //   boxShadow: "0px 0px 6px #ff8b67"
    // },
    // "&:acitve": {
    //   border: "1px solid #ff8b67",
    //   boxShadow: "0px 0px 6px #ff8b67"
    // }
  })
};

  return (
    <Select
      options={props.options}
      styles={customStyles}
      onChange={props.onChange}
      defaultInputValue={props.defaultInputValue}
      className='tw-text-md tw-text-right'
      defaultValue={props.defaultValue}
      value={props.value}
      placeholder={props.placeholder}
      inputValue={inputValue}
      name={props.name}
      // theme={(theme) => ({
      //   ...theme,
      //   colors: {
      //     ...theme.colors,
      //     text: 'blue',
      //     primary25: 'pink',
      //     primary: 'black',
      //   },
      // })}
    //   styles={customStyles}
      onInputChange={handleInputChange}
      autoFocus={props.autoFocus}
      onKeyDown={handleKeyDown}
      filterOption={customFilterOption}
      isSearchable
    />
  )
}

export default ProfessionalSelect
