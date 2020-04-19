const glob = require('glob-all');

describe('Checking generatd html files', ()=>{
  it('should generate html files', (done)=>{
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html'
    ])
    if(files.length > 0){
      done()
    }else{
      throw new Error('no html files generatd')
    }

  });
});