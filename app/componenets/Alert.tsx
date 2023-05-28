import React from 'react';
import { Alert as FlowbiteAlert } from 'flowbite-react';

interface AlertProps {
    message?: string;
    color?: "success" | "failure" | "warning"; 
    show: boolean;
}

const Alert: React.FC<AlertProps> = ({ message = "Info alert!", color = "success", show }) => {
    return (
        <>
            {show ? <FlowbiteAlert color={color}>
                <span>
                    <span className="font-medium">{message}</span>
                </span>
            </FlowbiteAlert> : null}
        </>
    );
}

export default Alert;
