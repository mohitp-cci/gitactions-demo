module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/github",
        ["@semantic-release/npm", {
            npmPublish: false
        }],
        ["@semantic-release/release-notes-generator", {
            "parserOpts": {
                "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
            },
            "writerOpts": {
                "commitsSort": ["subject", "scope"]
            }
        }],
        ["@semantic-release/git", {
            "assets": ["package.json"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
    ],
    branches: [
        'main',
        {
            name: 'feature/*',
            prerelease: true
        },
        { name: 'beta', prerelease: true, channel: 'beta' },
        { name: 'alpha', prerelease: true }
    ],
    // preset: 'angular'
}