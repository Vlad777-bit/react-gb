export class PhotoServiceDto {
  static async getAll(limit = 5) {
    return await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
    );
  }
}
