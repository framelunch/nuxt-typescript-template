module.exports = {
  extends: ['stylelint-config-framelunch'],
  ignoreFiles: ['./*', 'dist/**/*', 'src/static/**/*'],
  rules: {
    // @系の構文の前には基本空行をいれる
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless'],
      },
    ],
    // 複雑すぎる指定はNG ただし属性っぽいものはだいたいOK
    'selector-max-specificity': ['0,2,0', { ignoreSelectors: ['/:.*/', '/-[^-].*/', '/ \\+ /'] }],
    // コメントの前には空行
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    // カンマの後ろにはスペース
    'function-comma-space-after': 'always-single-line',

    /*
     * conflict with prettier
     */
    'max-line-length': null,
    indentation: null,
    'no-extra-semicolons': null,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,
    'string-quotes': null,
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,
    'value-list-comma-newline-after': null,
    'declaration-colon-newline-after': null,
  },
};
