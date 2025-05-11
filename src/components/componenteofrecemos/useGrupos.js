// src/hooks/useGrupos.js
import { useState, useEffect } from 'react';

export const useGrupos = () => {
    const [grupos, setGrupos] = useState(() => {
        // Cargar grupos desde localStorage al inicio
        const saved = localStorage.getItem('grupos');
        return saved ? JSON.parse(saved) : [];
    });

    // Guardar en localStorage cuando cambian
    useEffect(() => {
        localStorage.setItem('grupos', JSON.stringify(grupos));
    }, [grupos]);

    return { grupos, setGrupos };
};