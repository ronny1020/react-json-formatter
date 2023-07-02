import type { Meta, StoryObj } from '@storybook/react'
import JsonFormatter from '.'

const meta: Meta<typeof JsonFormatter> = {
  component: JsonFormatter
}

export default meta
type Story = StoryObj<typeof JsonFormatter>

export const Primary: Story = {
  args: {
    json: `{
        "string":"ABCDE",
        "number":1,
        "null":null,
        "boolean":true,
        "object":{
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        },
        "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true,
              "array":[
           1,
           2,
           3,
           4,
           {
           "string":"ABCDE",
           "number":1,
           "null":null,
           "boolean":true
        }
        ]
        }
        ]
     }
     `,
    jsonStyle: {
      numberStyle: { color: 'darkorange' },
      propertyStyle: { color: 'red' },
      stringStyle: { color: 'green' }
    },
    tabWith: 4
  }
}
