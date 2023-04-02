import axios from 'axios';

export async function fetchImages(searchImages, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '34846253-6b7c00c224b7c5f83c52d1b0f';

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchImages}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`
    );
    // console.log(response)
    return {
      totalHits: response.data.totalHits,
      hits: response.data.hits,
    };
  } catch (error) {
    console.log(error);
  }
}
