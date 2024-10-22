import React, { useState } from 'react'
import useMarkdownSync from 'hooks/useMarkdownSync'
import styled from 'styled-components'
import { mapObject } from 'utils/object'
import { createEditorStateFromMarkdown, updateEditorStateWithMarkdown } from 'utils/editor'

import Menu from 'components/Menu'
import CanvasHeader from 'components/CanvasHeader'
import CanvasArea from 'components/CanvasArea'

import model from './model'


const GridContainer = styled.div`
  background-color: ${({ theme }) => theme.paperBackground};
  border-color: ${({ theme }) => theme.pageBackground};
  border-style: solid;
  border-width: 0.5em;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 1fr 1fr 1fr 0.75fr;
  grid-template-areas:
    "menu menu menu menu menu menu menu menu menu menu menu menu"
    "purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose purpose"
    "education-engagement education-engagement education-engagement privacy-security privacy-security privacy-security transparency-accountability transparency-accountability transparency-accountability governance-accountability governance-accountability governance-accountability"
    "accessibility-inclusion accessibility-inclusion accessibility-inclusion privacy-security privacy-security privacy-security social-impact social-impact social-impact governance-accountability governance-accountability governance-accountability"
    "comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations comments-observations";
  margin: auto;

  height: 100%;
  width: 100%;
  @media screen {
    min-width: 90em;
    min-height: 60em;
  }
`

const StyledCanvasArea = styled(CanvasArea)`
  grid-area: ${({ gridArea }) => gridArea};
`

const StyledCanvasHeader = styled(CanvasHeader)`
  grid-area: ${({ gridArea }) => gridArea};
`

const StyledMenu = styled(Menu)`
  grid-area: menu;
`

const getInitialEditorStates = (sections) => sections.reduce(
  (acc, section) => ({
    ...acc,
    [section.key]: createEditorStateFromMarkdown(section.content),
  }),
  {}
)


function BusinessModelCanvas() {
  const markdownSyncApi = useMarkdownSync({ model })

  const [editorStates, setEditorStates] = useState(
    () => getInitialEditorStates(markdownSyncApi.sections)
  )
  const setSectionEditorState = (key, editorState) => {
    const nextEditorStates = {
      ...editorStates,
      [key]: editorState,
    }
    setEditorStates(nextEditorStates)
  }

  const updateEditorStates = () => {
    const nextEditorStates = mapObject(editorStates, (key, editorState) => updateEditorStateWithMarkdown(
      editorState,
      markdownSyncApi.getSection(key).content,
    ))
    setEditorStates(nextEditorStates)
  }
  const handleReset = () => {
    markdownSyncApi.reset()
    updateEditorStates()
  }
  const handleLoadFromFile = (file) => {
    markdownSyncApi.loadFromFile(
      file
    ).then(
      updateEditorStates
    )
  }

  return (
    <React.Fragment>
      <GridContainer>
        <StyledMenu
          loadFromFile={handleLoadFromFile}
          onReset={handleReset}
          onSaveAs={markdownSyncApi.saveAs}
        />
        {(markdownSyncApi.sections.map(({ isHeader, key, ...section }) => {
          const sectionProps = {
            editorState: editorStates[key],
            isSimple: isHeader,
            onChange: ({ content, editorState }) => {
              markdownSyncApi.updateSection(key, { content })
              setSectionEditorState(key, editorState)
            },
            ...section,
          }
          if (isHeader) {
            return (
              <StyledCanvasHeader
                gridArea={key}
                header={markdownSyncApi.header}
                key={key}
                onHeaderChange={markdownSyncApi.updateHeader}
                onPropertyChange={markdownSyncApi.updateProperty}
                getProperty={markdownSyncApi.getProperty}
                sectionProps={sectionProps}
              />
            )
          } else {
            return (
              <StyledCanvasArea
                gridArea={key}
                key={key}
                {...sectionProps}
              />
            )
          }
        }))}
      </GridContainer>
    </React.Fragment>
  )
}

export default BusinessModelCanvas
