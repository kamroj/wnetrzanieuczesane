import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'roboczy',
  title: 'nieuczesane-dev',

  projectId: 'qvenq7z0',
  dataset: 'develop',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'portfolio') {
        return prev.map(option => {
          if (option.templateId === 'portfolio') {
            return {
              ...option,
              initialValue: {
                createdAt: new Date().toISOString()
              }
            }
          }
          return option
        })
      }
      return prev
    },
  },
})
