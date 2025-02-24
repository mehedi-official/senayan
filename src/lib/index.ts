// place files you want to import through the `$lib` alias in this folder.
export function createImageSet(sources: { [format: string]: string }) {
	let imageSet = '';
	const entries = Object.entries(sources);
	const countEntries = entries.length - 1;

	for (let i = 0; i <= countEntries; i++) {
		const [format, source] = entries[i];
		const paths = source.split(', ');
		const countPaths = paths.length - 1;

		for (let j = 0; j <= countPaths; j++) {
			const [src, size] = paths[j].split(' ');

			if (!size.endsWith('w' || 'h')) imageSet += `url('${src}') type('image/${format}') ${size}`;
			else imageSet += `url('${src}') type('image/${format}') ${j + 1}x`;

			if (i !== countEntries || j !== countPaths) imageSet += ', ';
		}
	}

	return `image-set(${imageSet})`;
}
