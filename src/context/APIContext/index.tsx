import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import type {
  APIContextInterface,
  Collaborator,
} from '@/types/APIContextTypes';
import collabData from '@/context/APIContext/data';

const APIContext = createContext({} as APIContextInterface);

export default function APIContextProvider({
  children,
}: { children: ReactNode }) {
  const [collaborators, setCollaborators] = useState<null | Collaborator[]>(
    null,
  );

  useEffect(() => {
    setCollaborators(collabData);
  }, [collabData]);

  return (
    <APIContext.Provider value={{ collaborators, setCollaborators }}>
      {children}
    </APIContext.Provider>
  );
}

const useAPIContext = () => useContext(APIContext);

export { useAPIContext, APIContextProvider };
