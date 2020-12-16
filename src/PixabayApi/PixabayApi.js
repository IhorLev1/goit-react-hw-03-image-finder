import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImgWithQuery = async (search = '', page = 1) => {
  const { data } = await axios.get(
    `/?q=${search}&page=${page}&key=18801046-311dc3cce9ae418b311c7953d&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default fetchImgWithQuery;
