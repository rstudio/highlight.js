/*
Language: R
Author: Joe Cheng <joe@rstudio.org>
*/

hljs.LANGUAGES.r = {
  defaultMode: {
    lexems: '[a-zA-Z.][a-zA-Z0-9._]*',
    keywords: {
      'keyword': {
         'function' : 2, 'if' : 1, 'in' : 1, 'break' : 1, 'next' : 1, 'repeat' : 1, 'else' : 1, 'for' : 1,
         'return' : 1, 'switch' : 1, 'while' : 1, 'try' : 1, 'tryCatch' : 10, 'stop' : 1, 'warning' : 1,
         'require' : 1, 'library' : 10, 'attach' : 1, 'detach' : 1, 'source' : 1, 'setMethod' : 1,
         'setGeneric' : 10, 'setGroupGeneric' : 10, 'setClass' : 1, '...' : 10
      },
      'literal': {'NULL': 1, 'NA': 10, 'TRUE': 1, 'FALSE': 1, 'T': 1, 'F': 1, 'Inf': 1, 'NaN': 1,
                  'NA_integer_': 10, 'NA_real_': 10, 'NA_character_': 10, 'NA_complex_': 10}
    },
    contains: [
      hljs.HASH_COMMENT_MODE,

      {
        // hex value
        className: 'number',
        begin: "\\b0[xX][0-9a-fA-F]+[Li]?\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      },
      {
        // explicit integer
        className: 'number',
        begin: "\\b\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      },
      {
        // number
        className: 'number',
        begin: "\\b\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      },
      {
        // number with leading decimal
        className: 'number',
        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 1
      },

      // {
      //   className: 'identifier',
      //   begin: "[a-zA-Z.][a-zA-Z0-9._]*\\b",
      //   end: hljs.IMMEDIATE_RE,
      //   relevance: 0
      // },

      {
        // high relevance for common R case of non-numeric assignment
        className: 'operator',
        begin: '<\\-(?!\\s*\\d)',
        end: hljs.IMMEDIATE_RE,
        relevance: 2  // Let's not go crazy because Haskell uses this too
      },
      {
        // higher relevance for unusual operator
        className: 'operator',
        begin: '\\->|<\\-',
        end: hljs.IMMEDIATE_RE,
        relevance: 1
      },
      {
        className: 'operator',
        begin: '%%|~',
        end: hljs.IMMEDIATE_RE
      },
      {
        // common operators
        className: 'operator',
        begin: '>=|<=|==|!=|\\|\\||&&|=|\\+|\\-|\\*|/|\\^|>|<|!|&|\\||\\$|:',
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      },

      {
        // infix operator
        className: 'operator',
        begin: '%',
        end: '%',
        illegal: '\\n',
        relevance: 1
      },

      {
        // escaped identifier
        className: 'identifier',
        begin: '`',
        end: '`',
        relevance: 0
      },

      {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      },
      {
        className: 'string',
        begin: "'",
        end: "'",
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      },

      {
        className: 'paren',
        begin: '[[({\\])}]',
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      }

    ]
  }
};

