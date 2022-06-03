import React from 'react'
interface Props {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: any;
    onChange?: any
    className?: string
    id?: string
    role?: string
    value?: string
    type?: string
    name?: string

}

export default function Button ({ onClick, className, children, type, ...props }: Props) {

    return (
        <button className={ className } onClick={ onClick }>
            { children }

        </button>
    )
}
