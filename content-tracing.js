const {contentTracing} = require('electron');

const options = {
  categoryFilter: '*',
  traceOptions: 'record-until-full,enable-sampling'
};

contentTracing.startRecording(options, () => {
  console.log('Tracing Started');

  setTimeout(() => {
    contentTracing.stopRecording('', (path) => {
      console.log('Tracing data recorded to ' + path);
    })
  }, 5000);
});