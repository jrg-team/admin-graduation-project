import { createBrowserHistory } from 'history';
import publicUrl from './public-url'
const history = createBrowserHistory({
  basename: publicUrl
});

export default history