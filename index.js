const fs = require('fs');
const path = require('path');

const BUILD_DIR = './build';

const copyFiles = (src, build, func) => 
	fs.readdirSync(path.resolve(src))
		.forEach(file => 
			func(file) && fs.copyFileSync(path.resolve(src, file), path.resolve(build, file)));

fs.rmdirSync(path.resolve(BUILD_DIR), { recursive: true });

fs.mkdirSync(path.resolve(BUILD_DIR));
copyFiles('./site', BUILD_DIR, (file) => {
	if(file === 'assets'){
		const dir = path.resolve(BUILD_DIR, file)
		fs.mkdirSync(dir);
		copyFiles(path.resolve('./site', file), dir, () => true);
		return false;
	} 
	return true;
});