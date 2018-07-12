var angularVersion = '2.0.0-rc.6';

System.config({
  baseUrl: '/',
  transpiler: 'typescript', 
  typescriptOptions: { emitDecoratorMetadata: true },

  meta: {
    '*': {
      deps: [ 'reflect-metadata' ]
    }
  },
  
  paths: {
    'unpkg:*': 'https://unpkg.com/*'
  }
});

System.config({
  packageConfigPaths: [
    "unpkg:@*/*/package.json"
  ],
  
  map: {
    '@angular/core': 'unpkg:@angular/core@'+angularVersion,
    '@angular/compiler': 'unpkg:@angular/compiler@'+angularVersion,
    '@angular/common': 'unpkg:@angular/common@'+angularVersion,
    '@angular/platform-browser': 'unpkg:@angular/platform-browser@'+angularVersion,
    '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@'+angularVersion,
    'rxjs': 'unpkg:rxjs@5.0.0-beta.12',
    'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
    "crypto": "@empty"
  },
  
  packages: {
    'app': {
      defaultExtension: 'ts',
      main: './boot.ts'
    }
  }
});