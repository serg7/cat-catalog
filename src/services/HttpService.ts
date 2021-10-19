export default class HttpService {
  async fetchCats() {
    const result = await fetch('https://api.thecatapi.com/v1/breeds?attach_breed=0');
    const cats = await result.json();
    return cats;
  }
}
