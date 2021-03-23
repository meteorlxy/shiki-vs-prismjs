import { performance } from 'perf_hooks';
import { getHighlighter } from 'shiki';
import { tsCode, yamlCode } from './code';

const main = async (): Promise<void> => {
  const initStart = performance.now();
  const highlighter = await getHighlighter({});
  const initEnd = performance.now();

  const renderTsStart = performance.now();
  for (let i = 0; i < 100; i += 1) {
    highlighter.codeToHtml(tsCode, 'typescript');
  }
  const renderTsEnd = performance.now();

  const renderYamlStart = performance.now();
  for (let i = 0; i < 100; i += 1) {
    highlighter.codeToHtml(yamlCode, 'yaml');
  }
  const renderYamlEnd = performance.now();

  console.log('shiki');
  console.log(`init: ${initEnd - initStart}ms`);
  console.log(`render ts: ${renderTsEnd - renderTsStart}ms`);
  console.log(`render yaml: ${renderYamlEnd - renderYamlStart}ms`);
};

main();
