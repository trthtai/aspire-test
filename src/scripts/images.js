const fs = require('fs');

const renameFileName = (fileName) => {
	let name = '';
	const array = fileName.split('-');

	for (let i = 0; i < array.length; i += 1) {
		if (i == 0) {
			name += array[i].toLowerCase();
		} else {
			name += array[i].charAt(0).toUpperCase() + array[i].slice(1);
		}
	}
	return name;
};

const removeExtension = (file) => {
	return file
		.replace('.png', '')
		.replace('.webp', '')
		.replace('.jpg', '')
		.replace('.jpeg', '');
};

const imageFileNames = [];

const getAllImageFileNames = (path, imageFiles, subDirectory = '') => {
	const files = fs
		.readdirSync(path, { withFileTypes: true })
		.filter((file) => {
			if (file.name.includes('@2x') || file.name.includes('@3x'))
				return false;
			return (
				file.name.endsWith('.png') ||
				file.name.endsWith('.webp') ||
				file.name.endsWith('.jpg') ||
				file.name.endsWith('.jpeg') ||
				file.isDirectory()
			);
		});
	files.forEach((file) => {
		if (file.isDirectory()) {
			getAllImageFileNames(`${path}/${file.name}`, imageFiles, file.name);
		} else {
			imageFiles.push({
				path:
					subDirectory != ''
						? `${subDirectory}/${file.name}`
						: file.name,
				name: file.name,
			});
		}
	});
};

const generate = () => {
	getAllImageFileNames('src/res/images', imageFileNames);
	const properties = Array.from(new Set(imageFileNames))
		.map((fileInfo) => {
			return `${renameFileName(
				removeExtension(fileInfo.name)
			)}: require('./images/${fileInfo.path}')`;
		})
		.join(',\n  ');

	const string = `/* eslint-disable global-require */
  const images = {
  ${properties}
}

export default images
`;

	fs.writeFileSync('src/res/images.tsx', string, 'utf8');
};

generate();
