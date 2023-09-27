export default function signUpUser(lastName, firstName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

