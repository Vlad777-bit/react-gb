import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Buttom from './Button'

describe('Button', () => {
  it('render component Button', () => {
    render(<Buttom>Change name</Buttom>)
  })

  it('render with snapshot', () => {
    const {asFragment} = render(<Buttom>Change name</Buttom>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render component with text name button', () => {
    render(<Buttom>Change name</Buttom>)
    expect(screen.getByText(/Change name/)).toBeInTheDocument()
  })

  it('render multiply component', () => {
    render(
      <>
        <Buttom>Edet</Buttom>
        <Buttom>Delete</Buttom>
      </>
    )
    expect(screen.queryAllByRole('button').length).toBe(2)
  }) 

  it('button is disable', () => {
    render(<Buttom disabled>Delete</Buttom>)
    expect(screen.getByText(/Delete/)).toBeDisabled()
  })

  it('button have style color black', () => {
    render(<Buttom>Delete</Buttom>)
    expect(screen.getByText(/Delete/)).toHaveStyle({color: 'black'})
  })

  it('button click with userEvent', async () => {
    const mockHandler = jest.fn()

    render(<Buttom click={mockHandler}>Delete</Buttom>)
    await userEvent.click(screen.getByText(/Delete/))
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  it('test example', async () => {
    const onChange = jest.fn()
    render(<input type="checkbox" onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')
    await userEvent.dblClick(checkbox)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(checkbox).not.toBeChecked()
  })
})