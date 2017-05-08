export function setup(canvas) {
  const context = canvas.getContext('2d');
  const img = document.createElement('img');
  img.addEventListener('load', onImageLoad);

  canvas.addEventListener('dragover', onContextDragOver);
  canvas.addEventListener('drop', onContextDrop);

  function onImageLoad() {
    clearCanvas(canvas);
    context.drawImage(img, 0, 0);
  }

  function onContextDrop(event) {
    const {files} = event.dataTransfer;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.includes('image')) {
        const reader = new FileReader();
        reader.addEventListener('load', onReaderLoad);
        reader.readAsDataURL(file);
        event.preventDefault();
      }
    }

    function onReaderLoad(event) {
      img.src = event.target.result;
    }
  }
}

function clearCanvas(canvas) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function onContextDragOver(event) {
  event.preventDefault();
}

