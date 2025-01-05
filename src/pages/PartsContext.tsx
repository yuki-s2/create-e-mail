import { createContext, useContext, useState, ReactNode } from "react";

// Context の型定義
interface PartsContextType {
  parts: string[];
  addPart: (part: string) => void;
}

// デフォルト値
const PartsContext = createContext<PartsContextType | undefined>(undefined);

// Provider コンポーネント
export const PartsProvider = ({ children }: { children: ReactNode }) => {
  const [parts, setParts] = useState<string[]>([]);

  const addPart = (part: string) => setParts((prevParts) => [...prevParts, part]);

  return (
    <PartsContext.Provider value={{ parts, addPart }}>
      {children}
    </PartsContext.Provider>
  );
};

// Context を利用するカスタムフック
export const useParts = () => {
  const context = useContext(PartsContext);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
