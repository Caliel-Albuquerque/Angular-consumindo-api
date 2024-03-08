export type Character = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<{
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    type: string;
  }>;
}