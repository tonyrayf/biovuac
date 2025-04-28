export default function getImageWidth(imageUrl : string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            resolve(img.naturalWidth); // Get the original width of the image
        };
    });
}