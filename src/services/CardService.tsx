import images from 'app/src/res/images';

export const getCardType = (type: string) => {
	switch (type) {
		case 'visa':
			return images.iconVisa;
		default:
			return '';
	}
};
