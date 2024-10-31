import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphql.anilist.co',
  documents: [
    'src/**/*.tsx',
    'src/graphql/queries/*.tsx',
    'src/graphql/queries/**/*.ts',
    'src/graphql/mutations/*.tsx',
    'src/graphql/mutations/**/*.ts',
  ],
  generates: {
    'src/graphql/codegen/': {
      preset: 'client',
      plugins: [],
      config: {
        useTypeImports: true,
      },
    },
  },
};

export default config;
