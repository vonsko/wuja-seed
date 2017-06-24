import { WujaSeedPage } from './app.po';

describe('wuja-seed App', () => {
  let page: WujaSeedPage;

  beforeEach(() => {
    page = new WujaSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
