const core = require('@actions/core');

try {
  const event = JSON.parse(core.getInput('event', {required: true}));
  const commentBody = event['comment']['body'];
  const pattern = /!build *\[\S*]\((\S*)\) *(\S*)?/;
  const matches = commentBody.match(pattern);

  console.log(commentBody);
  console.log(matches);

  const path = matches[1];
  const version = matches[2] ? matches[2].replace('tags/', '') : '';

  core.setOutput('path', path);
  core.setOutput('version', version);
} catch (error) {
  core.setFailed(error.message);
}

