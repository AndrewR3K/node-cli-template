const CLI = require('clui');
const Spinner = CLI.Spinner;
const prompts = require('../prompts/general');
const store = require('../store');

async function askName () {
  const response = await prompts.askMain()
  let fn = response['First Name'];
  let ln = response['Last Name'];
  store.setName(fn, ln);
  return { fn: fn, ln: ln }
}
module.exports = {
  helloWorld: async () => {
    let fn = ''
    let ln = ''

    if (store.getName()) {
      const cont = await prompts.newUserQ();
      if (!cont['New User']) {
        const status = new Spinner('Running code snippet...');
        status.start();

        const gname = store.getName();
        fn = gname.fn;
        ln = gname.ln;
        
        status.stop();
      } else {
        let nval = await askName();
        fn = nval.fn;
        ln = nval.ln;
      }   
    } else {
      let nval = await askName();
      fn = nval.fn;
      ln = nval.ln;
      store.setName(fn, ln);
    }
    return `Hello ${fn} ${ln}!`
  },
};
