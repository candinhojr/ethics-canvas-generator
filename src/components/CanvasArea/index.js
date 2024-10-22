import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getMarkdownFromEditorState } from 'utils/editor'

import AreaBorder from 'components/AreaBorder'
import Editor from 'components/Editor'


const AreaBox = styled.article`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  position: relative;
`
const AreaHeader = styled.h2`
  font-size: 1.4em;
  margin: 0 0 0.5rem 0;
`
const StyledEditor = styled(Editor)`
  flex: 1;
`

function CanvasArea({
  border,
  content,
  editorState,
  header,
  onChange,
  placeholder,
  ...otherProps
}) {
  return (
    <AreaBox
      {...otherProps}
    >
      <AreaHeader>{header}</AreaHeader>
      <StyledEditor
        editorState={editorState}
        onChange={(nextEditorState) => {
          onChange({
            content: getMarkdownFromEditorState(nextEditorState),
            editorState: nextEditorState,
          })
        }}
        placeholder={placeholder}
      />
      <AreaBorder {...border} />
    </AreaBox>
  )
}

CanvasArea.propTypes = {
  border: PropTypes.object,
  content: PropTypes.string.isRequired,
  editorState: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

CanvasArea.defaultProps = {
  border: [false, false, false, false],
}

export default CanvasArea
