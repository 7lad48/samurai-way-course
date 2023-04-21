import React from "react"

type PropsType = {
    title: string,
}

export default function Header(props: PropsType){
    return (
        <h2>
            {props.title}
        </h2>
    );
}