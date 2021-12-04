# Stream and Process an Image

## Run 
1. Install dependencies
```
npm install
```
2. Run download and process function
```bash
npm run start 
```
after run the command, you can see two images, img.jpg, process-img.jpg, in the folder, `./images`
3. Test the function
```bash
npm run test
```
## Methods
1. Stream the image using `axios`.
2. Create a write stream and save the image to path, `images/img.jpg`.
3. Use `sharp` to flip the image.
4. Save the flipped image to path, `images/flip-img.jpg`.

## Testing
- test if the image downloaded by the function is same as an image downloaded by myself manually.

## Dependencies
- `axios` : for fetching images
- `sharp` : for processing images
- `jest` : for unit test
