import type { Dispatch, SetStateAction } from 'react';

export interface Position {
  description: string;
}

export interface Collaborator {
  id: number;
  name: string;
  position: Position;
  hireDate: string;
  monetaryValue: string;
  CPF: string;
}

export interface APIContextInterface {
  collaborators: Collaborator[] | null;
  setCollaborators: Dispatch<SetStateAction<null | Collaborator[]>>;
}
