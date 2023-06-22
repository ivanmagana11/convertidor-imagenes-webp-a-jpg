document.getElementById('convert-button').addEventListener('click', convertToJpg);

function convertToJpg() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (file && file.type === 'image/webp') {
    const reader = new FileReader();

    reader.onload = function(e) {
      const imgDataUrl = e.target.result;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const dataUrl = canvas.toDataURL('image/jpeg');
        document.getElementById('output-image').src = dataUrl;
      };

      img.src = imgDataUrl;
    };

    reader.readAsDataURL(file);
  } else {
    alert('Selecciona un archivo WebP válido.');
  }
}
