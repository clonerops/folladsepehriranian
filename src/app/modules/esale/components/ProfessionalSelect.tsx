import React, { useState } from 'react'
import Select from 'react-select'

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
  return (
    <Select
      options={props.options}
      onChange={props.onChange}
      defaultInputValue={props.defaultInputValue}
      className='h-full rounded-md text-md'
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
