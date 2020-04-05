export default (update) => {
  fetch('https://ecocaffemap.firebaseio.com/arr.json')
    .then(res => res.json())
    .then(data => {
      const dataBase = [];
      for (const i in data) {
        dataBase.push(data[i]);
      }
      update(dataBase)
    })
    .catch(err => console.log(`err: ${err}`));
};
