# Stream and Process an Image

## Run 
1. Install dependencies
```
npm install
```
2. Download and flip the image
```bash
npm run start 
```
after running the command, you can see two images, img.jpg and flip-img.jpg, in the folder, `./images/`

3. Run unit tests
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
  - `test/test-img.jpg` is the image that I downloaded manually.

## Dependencies
- `axios` : for fetching images
- `sharp` : for processing images
- `jest` : for unit test
