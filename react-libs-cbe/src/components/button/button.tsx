import React, {ForwardedRef, forwardRef} from 'react'

import '../../assets/styles/base.css'
import styles from './button.scss'
import {IButton} from "./ibutton";

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
        const {...rest} = props
        const showIcon = () => {
            if (icon)
                return icon
        }
        const showLabel = () => {
            if (label)
                return (
                    <span
                        className={
                            typeof icon === 'object' || loading
                                ? `${styles[`icon-position-${iconPosition}`]}`
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
                    `${styles.btn}`,
                    `${styles[`btn-${size}`]}`,
                    `${styles[`btn-${actionType}`]}`,
                    iconPosition === 'top' || iconPosition === 'bottom' ? `${styles.square}` : '',
                    block ? `${styles.block}` : '',
                ].join(' ')}
                style={{backgroundColor}}
                disabled={disabled}
                onClick={onClick}
                ref={forwardedRef}
                {...rest}
            >
                <div
                    className={[
                        `${styles.btnContentWrapper}`,
                        `${styles[`icon-position-${iconPosition}`]}`,
                        block ? `${styles.block}` : '',
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
