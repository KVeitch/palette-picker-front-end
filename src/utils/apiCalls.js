const baseUrl = 'https://api-palette-picker.herokuapp.com/api/v1'
// const baseUrl = 'http://localhost:3000/api/v1';
export const getAllPalettes = async () => {
  const response = await fetch(`${baseUrl}/palettes`);
  if (!response.ok) {
    console.error('Could not get palettes.');
  }
  const data = await response.json();
  return data;
};

export const getPaletteById = async id => {
  const response = await fetch(`${baseUrl}/palettes/${id}`);
  const data = response.json();
  return data;
};

export const getPalettesByColor = async color => {
  const response = await fetch(`${baseUrl}/palettes/search/${color}`);
  const data = response.json();
  return data;
};

export const getAllProjects = async () => {
  const response = await fetch(`${baseUrl}/projects`);
  if (!response.ok) {
    console.error('Could not get projects.');
  }
  const data = await response.json();
  return data;
};

export const getProjectById = async id => {
  const response = await fetch(`${baseUrl}/projects/${id}`);
  const data = response.json();
  return data;
};

export const postProject = async projectInfo => {
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
};

export const postPalette = async paletteInfo => {
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
};

export const deleteProject = async id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${baseUrl}/projects/${id}`, options);
  const data = response.json();
  return data;
};

export const deletePalette = async id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`${baseUrl}/palettes/${id}`, options);
  const data = response.json();
  return data;
};

export const updateProject = async (id, update) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(update)
  };

  const response = await fetch(`${baseUrl}/projects/${id}`, options);
  const data = response.json();
  return data;
};

export const getUserProjects = async user_id => {
  const response = await fetch(`${baseUrl}/users/${user_id}/projects`);
  const data = await response.json();
  return data;
};

export const getProjectPalettes = async project_id => {
  const response = await fetch(`${baseUrl}/projects/${project_id}/palettes`);
  const data = await response.json();
  return data;
};
