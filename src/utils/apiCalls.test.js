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
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });
  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
   });

describe('getPaletteById',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });
  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
   });

describe('getPalettesByColor',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
   });

describe('getAllProjects',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
   });

describe('getProjectById',()=>{
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: 'results here' })
      });
    });
  });

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
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

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
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

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
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
  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
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
  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
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

  it('should HAPPY',()=>{})
  it('should SAD',()=>{})
  it('should SAD2',()=>{})
});