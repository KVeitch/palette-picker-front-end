const baseUrl = 'https://api-palette-picker.herokuapp.com/api/v1'

export const getAllPalettes = async () => {
  let response = await fetch(`${baseUrl}/palettes`);
  if(!response.ok) {
    console.error('Could not get palettes.')
  } 
  let data = await response.json();
  console.log(data)
}