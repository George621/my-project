const glob = require('glob-all');

describe('Checking generatd css js files', ()=>{
  it('should generate css js files', (done)=>{
    const files = glob.sync([
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.css',
      './dist/search_*.js'
    ])
    if(files.length > 0){
      done()
    }else{
      throw new Error('no html css js generatd')
    }

  });
});