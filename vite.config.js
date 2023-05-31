import handlebars from 'vite-plugin-handlebars'assert {type:'json'};
import { defineConfig } from 'vite';
import data from './data.json';

export default defineConfig({
    base : '/responsive_webpages/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-bootstrap.html',
                materialize: 'index-materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : data
      
  })]
    
});
