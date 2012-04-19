/*
Language: R
Author: Joe Cheng <joe@rstudio.org>
*/

hljs.LANGUAGES.r = {
  defaultMode: {
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
        // number with trailing decimal
        className: 'number',
        begin: "\\b\\d+\\.(?!\\d)(?:i\\b)?",
        end: hljs.IMMEDIATE_RE,
        relevance: 1
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

      {
        className: 'keyword',
        begin: "(?:tryCatch|library|setGeneric|setGroupGeneric)\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 10
      },
      {
        // ...
        className: 'keyword',
        begin: "\\.\\.\\.",
        end: hljs.IMMEDIATE_RE,
        relevance: 10
      },
      {
        // ..1, ..2, etc.
        className: 'keyword',
        begin: "\\.\\.\\d+(?![\\w.])",
        end: hljs.IMMEDIATE_RE,
        relevance: 10
      },
      {
        className: 'keyword',
        begin: "\\b(?:function)",
        end: hljs.IMMEDIATE_RE,
        relevance: 2
      },
      {
        className: 'keyword',
        begin: "(?:if|in|break|next|repeat|else|for|return|switch|while|try|stop|warning|require|attach|detach|source|setMethod|setClass)\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 1
      },
      {
        className: 'literal',
        begin: "(?:NA|NA_integer_|NA_real_|NA_character_|NA_complex_)\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 10
      },
      {
        className: 'literal',
        begin: "(?:NULL|TRUE|FALSE|T|F|Inf|NaN)\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 1
      },
      {
        className: 'identifier',
        begin: "[a-zA-Z.][a-zA-Z0-9._]*\\b",
        end: hljs.IMMEDIATE_RE,
        relevance: 0
      },

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

