const core = require('@actions/core');

try {
  const event = core.getInput('event', {required: true});
  core.setOutput('path', 'thisisthepathoutoput');
} catch (error) {
  core.setFailed(error.message);
}

