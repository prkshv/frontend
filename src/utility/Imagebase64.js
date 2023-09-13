async function ImageBase64(file) {
  const reader = new FileReader();
  //readAsDataURL: reads the file url
  reader.readAsDataURL(file);

  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
  return data;
}

export { ImageBase64 };
