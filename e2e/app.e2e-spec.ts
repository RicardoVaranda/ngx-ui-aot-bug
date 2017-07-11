import { CliUpdatePage } from './app.po';

describe('cli-update App', () => {
  let page: CliUpdatePage;

  beforeEach(() => {
    page = new CliUpdatePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
