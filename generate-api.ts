import fs, { NoParamCallback, PathOrFileDescriptor } from 'fs';
import path from 'path';
// import rimraf from 'rimraf';
import { generateApi } from 'swagger-typescript-api';

//TODO: Fix bug typescript check when building process
// rimraf.sync(path.resolve(process.cwd(), './src/apis/generate'));

generateApi({
  name: 'ApiClient.ts',
  url: 'http://192.168.57.33:8085/madive-one-0.0.1/v3/api-docs',
  input: path.resolve(process.cwd(), './swagger.json'),
  output: path.resolve(process.cwd(), './src/apis/generate'),
  httpClientType: 'axios',
  generateClient: true,
  toJS: false,
  generateResponses: true,
  typeSuffix: 'Dto',
  modular: true,
  extractEnums: true,
  // singleHttpClient: true,
  generateRouteTypes: true,
  extractRequestParams: false,
  extractRequestBody: false,
  unwrapResponseData: false,
  prettier: {
    // By default prettier config is load from your project
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript',
  },
})
  .then(({ files, configuration }) => {
    files.forEach(({ content, name }) => {
      fs.writeFile(path as unknown as PathOrFileDescriptor, content, {} as NoParamCallback);
    });
  })
  .catch((e) => console.error(e));
