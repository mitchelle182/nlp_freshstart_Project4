import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import { handleSubmit } from './js/formHandler';
import { checkForUrl } from './js/urlChecker';
document.getElementById('submit').addEventListener('click', handleSubmit);