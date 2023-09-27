import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const u = uploadPhoto(fileName);
  const s = signUpUser(firstName, lastName);

  return Promise.allSettled([u, s]).then((vals) => {
    const resArr = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        resArr.push({ status: val.status, value: val.value });
      } else {
        resArr.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return resArr;
  });
}

