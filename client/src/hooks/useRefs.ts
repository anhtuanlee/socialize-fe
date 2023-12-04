import { MeshLineGeometry } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

export const useRefs = () => {
    const refsByKey = useRef<Record<string, HTMLElement | Mesh | null>>({});

    const setRef = (element: HTMLElement | Mesh | null, key: string) => {
        refsByKey.current[key] = element;
    };

    return { refsByKey: refsByKey.current, setRef };
};
