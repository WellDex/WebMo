import { useCallback } from 'react';

export const useMessage = () => {
    return useCallback(txt => {
        if (window.M && txt) {
            window.M.toast({ html: txt });
        }
    }, []);
};