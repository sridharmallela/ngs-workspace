import { debug, getInput, info, setFailed } from '@actions/core';
import { context, getOctokit } from '@actions/github';

try {
  const tag = getInput('version');
  debug(`tag:${tag}`);
  debug(`setting client based on github token`);
  const client = getOctokit(getInput('token'));
  debug(`executing create tag for github`);
  const { status, data } = await client.rest.git.createTag({
    ...context.repo,
    tag,
    message: `Releasing v${tag}`,
    object: context.sha,
    type: 'commit'
  });
  debug(`Completed create tag for github > ${status}`);
  if (status !== 201) {
    setFailed(`Failed to create tag object (status=${status})`);
  } else {
    debug(`executing create ref for github`);
    const { status: refStatus } = await client.rest.git.createRef({
      ...context.repo,
      ref: `refs/tags/${tag}`,
      sha: data.sha
    });
    debug(`Completed create ref for github > ${refStatus}`);
    if (refStatus !== 201) {
      setFailed(`Failed to create tag ref(status = ${refStatus})`);
    } else {
      info(`Tagged ${data.sha} as ${tag}`);
    }
  }
} catch (err) {
  setFailed(err);
}
