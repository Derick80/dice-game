import React from 'react'

export type DieProps = {
    id?: number
    sided?: number;
    times?: number
    name?: string
    type?: string
    value?: string
    onClick?: any
    children?: React.ReactNode
}
export default function Die (props: DieProps) {

    const { id, name, times, onClick } = props
    return (<>
        <input type="button" key={ id } value={ name } name={ name } onClick={ onClick } />
    </>

    )
}
