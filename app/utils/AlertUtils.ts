import { useState} from 'react';

export const useAlert = (): [boolean, () => void] => {
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const triggerAlert = (): void => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };

    return [showAlert, triggerAlert];
};