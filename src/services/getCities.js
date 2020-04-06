const getCities = (fnc) => {
  fetch('https://ecocaffemap.firebaseio.com/cities.json')
    .then(data => data.json())
    .then(clearData => {
      const arrayWithData = [];
      for(const i in clearData) {
        arrayWithData.push(clearData[i]);
      }
      fnc(arrayWithData)
    })
    .catch(() => console.log('City error'))
};

export default getCities;


