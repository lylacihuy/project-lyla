import { ProjectLylaPage } from './app.po';

describe('project-lyla App', () => {
  let page: ProjectLylaPage;

  beforeEach(() => {
    page = new ProjectLylaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
