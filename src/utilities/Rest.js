export const GET = link => {
  //
  return fetch(link)
    .then(response => response.json())
    .then(data => {
      return data
    })
}
