
document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/api/dogs');
  const dogs = await res.json();

  const tableBody = document.getElementById('dog-table-body');

  for (const dog of dogs) {
    const imageRes = await fetch('https://dog.ceo/api/breeds/image/random');
    const imageData = await imageRes.json();
    const imageUrl = imageData.message;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${dog.dog_name}</td>
      <td>${dog.size}</td>
      <td>${dog.owner_username}</td>
      <td><img src="${imageUrl}" alt="dog" width="100"></td>
    `;
    tableBody.appendChild(row);
  }
});