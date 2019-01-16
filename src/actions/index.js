const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export function loading(bool) {
  return {
    type: 'LOADING',
    loading: bool
  };
};

export function fetchSuccess(data) {
  return {
    type: 'FETCH_SUCCESS',
    data
  };
};

export function fetchData(url) {
  return (dispatch) => {
    const num = Math.floor((Math.random() * 1000) + 1);
    const REQUEST_URL = `https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=${num}&relatedlimit=1`;

    fetch(PROXY_URL + REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(fetchSuccess(responseData.thought));
        dispatch(loading(false));
      })
      .catch((error) => console.log('Error:', error));
  };
}
