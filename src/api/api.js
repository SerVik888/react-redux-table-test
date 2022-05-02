export const API = {
  getPosts: async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
      return response.json()
    } catch (e) {
      return e
    }
  },
}
