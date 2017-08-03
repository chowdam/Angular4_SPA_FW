import { Angular4ResponsiveSpaPage } from './app.po';

describe('angular4-responsive-spa App', () => {
  let page: Angular4ResponsiveSpaPage;

  beforeEach(() => {
    page = new Angular4ResponsiveSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
