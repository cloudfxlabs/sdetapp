import { SdetappPage } from './app.po';

describe('sdetapp App', function() {
  let page: SdetappPage;

  beforeEach(() => {
    page = new SdetappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
