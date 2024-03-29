module.exports = {
	branches: ["master"],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		"@semantic-release/npm",
		[
			"@semantic-release/git",
			{
				assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
				message:
					"chore(release): [skip ci] ${nextRelease.version}\n\n${nextRelease.notes}",
			},
		],
		["@semantic-release/github", { assets: "*.tgz" }],
	],
};
