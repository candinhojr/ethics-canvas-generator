import React, { useEffect, useRef, useState } from 'react'
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
  font-size: 1.3em;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 2px;
`
const StyledEditor = styled(Editor)`
  flex: 1;
`
const HelpIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  font-size: 14px;
  color: #666;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover::after {
    content: "${props => props.tooltip.replace(/\n/g, '\\A ')}";
    position: absolute;
    top: calc(100% + 5px);
    left: ${props => props.tooltipPosition};
    transform: translateX(-45%);
    padding: 8px 12px;
    background: #333;
    color: white;
    font-size: 12px;
    border-radius: 4px;
    white-space: pre-wrap;
    z-index: 1000;
    width: 280px; /* Largura fixa para o tooltip */
    text-align: left;
    line-height: 1.4;
    max-width: 90vw;
  }
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
  const helpIconRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState('0px');

  useEffect(() => {
    const handleTooltipPosition = () => {
      if (helpIconRef.current) {
        const helpIconRect = helpIconRef.current.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        
        if (helpIconRect.right + 280 > screenWidth) {
          setTooltipPosition('-150px');
        } else {
          setTooltipPosition("150px");
        }
      }
    };

    window.addEventListener('resize', handleTooltipPosition);
    handleTooltipPosition();

    return () => {
      window.removeEventListener('resize', handleTooltipPosition);
    };
  }, []);

  return (
    <AreaBox
      {...otherProps}
    >
      <AreaHeader>
        {header}
        {placeholder && (
          <HelpIcon
            ref={helpIconRef}
            type="button"
            tooltip={placeholder}
            aria-label="Ajuda"
            tooltipPosition={tooltipPosition}
          >
            ?
          </HelpIcon>
        )}
      </AreaHeader>
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
