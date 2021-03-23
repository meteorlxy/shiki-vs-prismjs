import { performance } from 'perf_hooks';
import * as Prism from 'prismjs';
import * as loadLanguages from 'prismjs/components/index';
import { tsCode, yamlCode } from './code';

const main = async (): Promise<void> => {
  const initStart = performance.now();
  loadLanguages();
  const initEnd = performance.now();

  const renderTsStart = performance.now();
  for (let i = 0; i < 100; i += 1) {
    Prism.highlight(tsCode, Prism.languages.typescript, 'typescript');
  }
  const renderTsEnd = performance.now();

  const renderYamlStart = performance.now();
  for (let i = 0; i < 100; i += 1) {
    Prism.highlight(yamlCode, Prism.languages.yaml, 'yaml');
  }
  const renderYamlEnd = performance.now();

  console.log('prismjs');
  console.log(`init: ${initEnd - initStart}ms`);
  console.log(`render ts: ${renderTsEnd - renderTsStart}ms`);
  console.log(`render yaml: ${renderYamlEnd - renderYamlStart}ms`);
};

main();
