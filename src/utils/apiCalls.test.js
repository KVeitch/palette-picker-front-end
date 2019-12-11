
import {
  getAllPalettes,
  getPaletteById,
  getPalettesByColor,
  getAllProjects,
  getProjectById,
  postProject,
  postPalette,
  deleteProject,
  deletePalette,
  updateProject
} from './apiCalls'

describe('getAllPalettes',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(palettes)
      });
    });
  });

  it('should fetch with the correct URL',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/palettes';
    getAllPalettes()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return all palettes HAPPY',async ()=>{
    const response = await getAllPalettes()
    expect(response).toEqual(palettes)
  })

  
  it.skip('should SAD',()=>{})
});

describe('getPaletteById',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(palettes[0])
      });
    });
  });
  it('should fetch with the corect URL HAPPY',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/palettes/1';
    getPaletteById(1)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('should return a palette for a given Id HAPPY',async ()=>{
    const results = await getPaletteById(1)
    expect(results).toEqual(palettes[0])
  })
  
  it.skip('should SAD2',()=>{})
});

describe('getPalettesByColor',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve([palettes[0]])
      });
    });
  });

  it('should fetch with the correct URL',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/palettes/search/6320ee';
    getPalettesByColor('6320ee')
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return the paletts that contain the given color HAPPY', async ()=>{
    const results = await getPalettesByColor('6320ee')
    expect(results).toEqual([palettes[0]])
  })

  it.skip('should SAD2',()=>{})
   });

describe('getAllProjects',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(projects)
      });
    });
  });

  it('should fetch with the correct URL',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/projects';
    getAllProjects()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('should return an array of all of the projects HAPPY', async ()=>{
    const results = await getAllProjects()
    expect(results).toEqual(projects)
  })

  it.skip('should SAD',()=>{})

});

describe('getProjectById',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(projects[0])
      });
    });
  });

  it('should fetch with the correct URL',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/projects/1';
    getProjectById(1)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should return a project with the corecct Id HAPPY',async ()=>{
    const results = await getProjectById(1)
    expect(results).toEqual(projects[0])

  })

  it.skip('should SAD',()=>{})

});

describe('postProject',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should fetch with the correct URL and options',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/projects';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projects[0])
    };
    postProject(projects[0])
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  })

  it.skip('should add a project to the database HAPPY',()=>{

  })
  it.skip('should SAD',()=>{})
});

describe('postPalette',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });
  it('should fetch with the correct URL and options',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/palettes';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(palettes[0])
    };
    postPalette(palettes[0])
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  })
  it.skip('should add a palette to the database HAPPY',()=>{})

  it.skip('should SAD',()=>{})
  
});

describe('deleteProject',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should fetch with the correct URL and options',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/projects/1';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    deleteProject(1)
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  })

  it.skip('should remove a project from the database HAPPY',()=>{})
  it.skip('should SAD',()=>{})
  
});

describe('deletePalette',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should fetch with the correct URL and options',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/palettes/1';
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    deletePalette(1)
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  })

  it.skip('should HAPPY',()=>{})
  it.skip('should SAD',()=>{})
  
});

describe('updateProject',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should fetch with the correct URL and options',()=>{
    let url = 'https://api-palette-picker.herokuapp.com/api/v1/projects/1';
    const update = {color0:'123321'}
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    };
    updateProject(1,update)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it.skip('should HAPPY',()=>{})
  it.skip('should SAD',()=>{})
  
});




// Data for Test
const palettes= [
  {"id": 1,"palette_name": "Colors","project_id": 1,"color0": "6320ee","color1": "D5f2e3","color2": "999950","color3": "C7B446","color4": "C2B078"},
  {"id": 2,"palette_name": "Bright","project_id": 1,"color0": "786fa6","color1": "f19066","color2": "FFFF00","color3": "EDFF21","color4": "A98307"},
  {"id": 3,"palette_name": "Joker","project_id": 1,"color0": "211a1d","color1": "6320ee","color2": "D5f2e3","color3": "8075ff","color4": "8fc93a"},
  {"id": 4,"palette_name": "Russian Flat","project_id": 1,"color0": "f19066","color1": "786fa6","color2": "f19066","color3": "786fa6","color4": "574b90"},
  {"id": 5,"palette_name": "For Bill","project_id": 1,"color0": "16a085","color1": "2ecc71","color2": "AEA04B","color3": "E6D690","color4": "CDA434"}
]

const projects = [
  {
      "id": 1,
      "project_name": "Bob's House",
      "user_id": 1,
      "created_at": "2019-12-04T21:49:58.550Z",
      "updated_at": "2019-12-04T21:49:58.550Z"
  },
  {
      "id": 2,
      "project_name": "Susans's House",
      "user_id": 2,
      "created_at": "2019-12-04T21:49:58.554Z",
      "updated_at": "2019-12-04T21:49:58.554Z"
  },
  {
      "id": 3,
      "project_name": "Master Bath",
      "user_id": 1,
      "created_at": "2019-12-04T21:49:58.553Z",
      "updated_at": "2019-12-04T21:49:58.553Z"
  },
  {
      "id": 4,
      "project_name": "Front Room",
      "user_id": 2,
      "created_at": "2019-12-04T21:49:58.560Z",
      "updated_at": "2019-12-04T21:49:58.560Z"
  }
]