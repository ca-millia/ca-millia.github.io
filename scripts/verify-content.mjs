import fs from 'node:fs';
import assert from 'node:assert/strict';

const baseline = JSON.parse(fs.readFileSync('docs/migration-baseline.json', 'utf8'));
const changes = JSON.parse(fs.readFileSync('docs/content-changes.json', 'utf8'));
for (const entry of baseline) {
  const source = entry.original.replaceAll('\r\n', '\n');
  const current = fs.readFileSync(`src/content/posts/${entry.file}`, 'utf8').replaceAll('\r\n', '\n');
  const originalLines = source.split('\n');
  const restored = current.split('\n');
  for (const change of changes.filter(change => change.file === entry.file)) {
    assert.equal(originalLines[change.line - 1], change.before, `${entry.file}: baseline line ${change.line}`);
    assert.equal(restored[change.line - 1], change.after, `${entry.file}: undocumented edit at line ${change.line}`);
    restored[change.line - 1] = change.before;
  }
  assert.equal(restored.join('\n'), source, `${entry.file}: content changed outside the migration ledger`);
}
console.log(`Verified ${baseline.length} original articles: every source change is accounted for in the migration ledger.`);
