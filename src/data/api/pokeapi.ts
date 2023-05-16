const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20, offset = 0) {
  const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonDetail(id: string) {
  const response = await fetch(`${API_BASE_URL}/pokemon/${id}`);
  const data = await response.json();
  return data;
}

export async function getPokemonSpecies(id: string) {
  const response = await fetch(`${API_BASE_URL}/pokemon-species/${id}`);
  const data = await response.json();
  return data;
}