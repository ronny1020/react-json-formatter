import { render } from '@testing-library/react'
import JsonFormatter from '.'

describe('JsonFormatter', () => {
  const json = `{
    "name": "John Doe",
    "age": 30,
    "isStudent": true,
    "hobbies": ["reading", "coding", "gaming"],
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "country": "USA"
    } 
  }`

  it('renders JSON string correctly', () => {
    const { container } = render(<JsonFormatter json={json} />)
    expect(container.textContent).toContain('name')
    expect(container.textContent).toContain('John Doe')
    expect(container.textContent).toContain('age')
    expect(container.textContent).toContain('30')
    expect(container.textContent).toContain('isStudent')
    expect(container.textContent).toContain('true')
    expect(container.textContent).toContain('hobbies')
    expect(container.textContent).toContain('reading')
    expect(container.textContent).toContain('coding')
    expect(container.textContent).toContain('gaming')
    expect(container.textContent).toContain('address')
    expect(container.textContent).toContain('street')
    expect(container.textContent).toContain('123 Main St')
    expect(container.textContent).toContain('city')
    expect(container.textContent).toContain('New York')
    expect(container.textContent).toContain('country')
  })

  it('renders JSON object correctly', () => {
    const { container } = render(<JsonFormatter json={JSON.parse(json)} />)
    expect(container.textContent).toContain('name')
    expect(container.textContent).toContain('John Doe')
    expect(container.textContent).toContain('age')
    expect(container.textContent).toContain('30')
    expect(container.textContent).toContain('isStudent')
    expect(container.textContent).toContain('true')
    expect(container.textContent).toContain('hobbies')
    expect(container.textContent).toContain('reading')
    expect(container.textContent).toContain('coding')
    expect(container.textContent).toContain('gaming')
    expect(container.textContent).toContain('address')
    expect(container.textContent).toContain('street')
    expect(container.textContent).toContain('123 Main St')
    expect(container.textContent).toContain('city')
    expect(container.textContent).toContain('New York')
    expect(container.textContent).toContain('country')
    expect(container.textContent).toContain('USA')
  })

  it('applies custom class names correctly', () => {
    const jsonClassName = {
      braceClassName: 'custom-brace',
      stringClassName: 'custom-string'
    }

    const { container } = render(
      <JsonFormatter json={json} jsonClassName={jsonClassName} />
    )

    const braceElement = container.querySelector('.custom-brace')
    expect(braceElement).toBeInTheDocument()

    const stringElement = container.querySelector('.custom-string')
    expect(stringElement).toBeInTheDocument()
  })

  it('match the snapshot', () => {
    const { container } = render(<JsonFormatter json={json} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
