const core = require('@actions/core');

try {
  const obj = core.getInput('obj', {required: true});
  const path = core.getInput('path', {required: true}) || '';
  new AdmZip(file).extractAllTo(path, true);
  core.setOutput('path', path);
} catch (error) {
  core.setFailed(error.message);
}

