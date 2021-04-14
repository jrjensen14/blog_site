const postId = document.querySelector('input[name="post-id"]').value;

async function deleteFormHandler(event) {
  event.preventDefault();

  
  const response = await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);