import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  let body;
  let lastName;
  let firstName;

  const u = createUser();
  const p = uploadPhoto();

  return Promise.all([u, p]).then((data) => {
    body = data[1].body;
    lastName = data[1].lastName;
    firstName = data[1].firstName;
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}

