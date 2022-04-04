import { useEffect, useState } from 'react';

function toDataURL(url: string, callback: (v: string) => void) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result?.toString() || '');
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

const useProgressiveImage = (src: string, placeholder: string) => {
  const [sourceLoaded, setSourceLoaded] = useState(placeholder);

  useEffect(() => {
    toDataURL(src, (data) => {
      setSourceLoaded(data);
    });
  }, [src]);

  return sourceLoaded;
};

export default useProgressiveImage;
