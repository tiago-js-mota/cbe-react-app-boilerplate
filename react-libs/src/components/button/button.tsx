import React, { ForwardedRef, forwardRef } from 'react'

import '../../assets/styles/base.css'
import './button.scss'
import {IButton} from "./ibutton";

const loadingIcon = require('../../assets/images/btn_loading.gif')
/**
 * Primary UI component for user interaction
 */
const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      type = 'button',
      actionType = 'default',
      loading = false,
      size = 'medium',
      backgroundColor,
      label,
      disabled = false,
      onClick,
      icon,
      iconPosition = 'left',
      block = false,
      children,
      ...props
    },
    forwardedRef: ForwardedRef<HTMLButtonElement>
  ) => {
    const { ...rest } = props
    const showIcon = () => {
      if (loading) {
        return (
          <span className={'loading-icon'}>
            <img src={loadingIcon} alt={'loading icon'} />
          </span>
        )
      } else {
        return icon && icon
      }
    }
    const showLabel = () => {
      if (label)
        return (
          <span
            className={
              typeof icon === 'object' || loading
                ? `icon-position-${iconPosition}`
                : ``
            }
          >
            {label}
          </span>
        )
    }

    return (
      <button
        type={type}
        className={[
          'btn',
          `btn-${size}`,
          `btn-${actionType}`,
          iconPosition === 'top' || iconPosition === 'bottom' ? 'square' : '',
          block ? 'block' : '',
        ].join(' ')}
        style={{ backgroundColor }}
        disabled={disabled}
        onClick={onClick}
        ref={forwardedRef}
        {...rest}
      >
        <div
          className={[
            'btn-content-wrapper',
            `icon-position-${iconPosition}`,
            block ? 'block' : '',
          ].join(' ')}
        >
          {showLabel()}
          {showIcon()}
          {children}
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
