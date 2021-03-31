module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'test',
        'perf',
        'bump',
        'chore',
        'revert',
        'build',
        'ci',
        'style',
      ],
    ],
    'subject-case': [0],
    'scope-empty': [0],
  },
}
