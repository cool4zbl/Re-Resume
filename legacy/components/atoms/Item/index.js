import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLi = styled.li``

const Item = ({ children, ...props }) => {
  if (typeof children === 'string') {
    // replace simply markdown syntax, like `code`, **bold**
    const r = children
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\*{2}(.+?)\*{2}/g, '<strong>$1</strong>')
    return <StyledLi {...props} dangerouslySetInnerHTML={{ __html: r }} />
  }
  return <StyledLi {...props}>{children}</StyledLi>
}

Item.propTypes = {
  palette: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.any,
}

Item.defaultProps = {
  palette: 'grayscale',
}

export default Item
