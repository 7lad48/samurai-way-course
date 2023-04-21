import React from "react";

type PropsType = {
    value: string,
}

export default function Technologies(props: PropsType){
    return (
        <div>
            {props.value}
        </div>
    );
}