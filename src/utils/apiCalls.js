const baseUrl = 'https://api-palette-picker.herokuapp.com/api/v1'

export const getAllPalettes = async () => {
  const response = await fetch(`${baseUrl}/palettes`);
  if(!response.ok) {
    console.error('Could not get palettes.')
  }
  const data = await response.json();
  return data;
}

export const getPaletteById = async id => {
  const response = await fetch(`${baseUrl}/palettes/${id}`);
  const data = response.json();
  return data;
}

export const getAllProjects = async () => {
  const response = await fetch(`${baseUrl}/projects`);
  if(!response.ok) {
    console.error('Could not get projects.')
  }
  const data = await response.json();
  return data;
}

export const getProjectById = async id => {
  const response = await fetch(`${baseUrl}/projects/${id}`);
  const data = response.json();
  return data;
}

export const postProject = async (projectInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(projectInfo)
  };

  const response = await fetch(`${baseUrl}/projects`, options);
  const data = response.json();
  return data;
}

export const postPalette = async (paletteInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paletteInfo)
  };

  const response = await fetch(`${baseUrl}/palettes`, options);
  const data = response.json();
  return data;
}