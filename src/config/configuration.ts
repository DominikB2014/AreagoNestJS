import * as YAML from 'js-yaml';
import { readFileSync } from 'fs';
import { join } from 'path';

export default () => YAML.load(readFileSync(join(__dirname, 'config.yml'), 'utf8'));
