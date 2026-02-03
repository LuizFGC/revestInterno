import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface DataContextType {
    dataSelecionada: Date | undefined;
    setDataSelecionada: (data: Date | undefined) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>(new Date());

    return (
        <DataContext.Provider value={{ dataSelecionada, setDataSelecionada }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData deve ser usado dentro de DataProvider');
    }
    return context;
}
