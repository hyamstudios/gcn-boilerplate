const fs = require('fs')
const path = require('path')

const pkgJSON = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
const pkgObj = JSON.parse(pkgJSON)

module.exports = {
	templateFolder: './',
	filters: {
		'.git/**': false,
		'node_modules/**': false,
		'docs/**': false,
		'public/**': false, // just in case...
	},
	prompts: {
		name: {
			message: 'Name of the project',
			default: ':folderName:',
		},
		description: {
			message: 'Describe the project',
			default: 'a hy.am project',
		},
		version: {
			message: 'Version?',
			default: '0.1.0',
		},
		repo: {
			message: 'Repository of the project',
			default: 'https://github.com/hyamstudios/[name]',
		},
		user: {
			message: 'Author name',
			default: ':gitUser:',
		},
		email: {
			message: 'Author email',
			default: ':gitEmail:',
		},
	},
	data(answers) {
		pkgObj.name = answers.name
		pkgObj.description = answers.description
		pkgObj.version = answers.version
		pkgObj.repository =
			answers.repo === this.prompts.repo.default
				? this.prompts.repo.default.replace('[name]', answers.name)
				: answers.repo
		pkgObj.author = `${answers.user} <${answers.email}>`
		const str = JSON.stringify(pkgObj, null, 2)
		return {
			packageJSONContent: str,
		}
	},
	post(context, stream) {
		fs.writeFileSync(
			path.join(context.folderPath, 'package.json'),
			stream.meta.data.packageJSONContent,
			'utf8'
		)
	},
	yarnInstall: true,
	gitInit: true,
}
