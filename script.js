    document.getElementById('submit').addEventListener('click', function() {
      const password = document.getElementById('password').value;
      const content = document.getElementById('content');
      if (password === 'BR3ST24') {
        content.classList.remove('hidden');
      } else {
        alert('Incorrect password. Please try again.');
      }
    });
