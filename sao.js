module.exports = {
	// copy root directory
	templateFolder: './',
	prompts: {
		name: {
			message: 'Name of the project',
			default: ':folderName:',
		},
		description: {
			message: 'Describe the project',
			default: '',
		},
		version: {
			message: 'Project Version',
			default: '0.1.0',
		},
		repo: {
			message: 'Repository of the project',
			default: 'https://github.com/hyamstudios/',
		},
		user: {
			message: 'Author name',
			default: 'hy.am studios',
		},
		email: {
			message: 'Author email',
			default: 'development@hyam.de',
		},
	},
}
