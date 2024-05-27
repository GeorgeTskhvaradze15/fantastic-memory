import { title } from "process";

type Props = {
    children?:string;
    size?:string;
    title?:string;
}

export const MenuItem = ({title,children, size}:Props) => {

    const fontSize =size=="big" ? '26px' : '16px'
    
    return(
        <div style={{
            fontSize
        }}>
            {children}
            {title}
        </div>
    )
}