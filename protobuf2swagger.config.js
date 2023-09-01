const rootFolder = './specs';
const fileNames = ['models.proto', 'events.proto'];

module.exports = {
  files: fileNames.map(f => `${rootFolder}/${f}`),
  dist: `${rootFolder}/topic-specifications.schema.json`,
  long: 'number',
  transform(type, result, args) {
    switch (type) {
      case 'enum': {
        const [Enum] = args;
        // console.log('enum:', Enum);
        return { ...result, type: 'string', enum: Object.keys(Enum.values) };
      }
    }
    return result;
  }
};
