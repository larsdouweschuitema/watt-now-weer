const state = {
  firstImage: true
};

export function setup(canvas) {
  const context = canvas.getContext('2d');

  canvas.addEventListener('drop', event => {
    const {files} = event.dataTransfer;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.includes('image')) {
        const reader = new FileReader();
        const img = document.createElement('img');

        img.addEventListener('load', () => {
          clearCanvas(canvas);
          if (state.firstImage) {
            state.firstImage = false;
            return context.drawImage(img, 0, 0);
          }
          return context.drawImage(img, 50, 50);
        });

        reader.addEventListener('load', event => {
          img.src = event.target.result;
        });

        reader.readAsDataURL(file);

        event.preventDefault();
      }
    }
  });

  canvas.addEventListener('dragover', event => event.preventDefault());
}

function clearCanvas(canvas) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

