export interface CharacterResponse {
  items: Character[];
  meta: MetaResponse;
  links: LinksResponse;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  afiliation: string;
}

export interface MetaResponse {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface LinksResponse {
  first: string;
  previous: string;
  next: string;
  last: string;
}
