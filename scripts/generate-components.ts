import fs from 'node:fs';
import path from 'node:path';

const SVG_DIRECTORY = './src/svg';
const OUTPUT_DIRECTORY = './src/components';
const TYPES_DIRECTORY = './src/types/icons';

function getComponentName(fileName: string): string {
  const name = fileName.replace('.svg', '');
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, match => match[1].toUpperCase());
}

function generateWrapperCode(componentName: string, fileName: string): string {
  return `import { forwardRef, Ref } from "react";
import { useIcon } from "@/hooks/use-icon";
import type { IconProps } from "@/types/icons/icon-types";
import SvgIcon from "@/svg/${fileName}";

const ${componentName} = (originalProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { iconProps: props } = useIcon(originalProps);

  return <SvgIcon {...props} ref={ref} />;
};

export default forwardRef(${componentName});
`;
}

async function generateComponents() {
  if (!fs.existsSync(OUTPUT_DIRECTORY)) {
    fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  }
  if (!fs.existsSync(TYPES_DIRECTORY)) {
    fs.mkdirSync(TYPES_DIRECTORY, { recursive: true });
  }

  const svgFiles = fs.readdirSync(SVG_DIRECTORY).filter((file: string) => file.endsWith('.svg'));
  const componentNames: string[] = [];
  const indexExports: string[] = [
    "export * from './types/icons/icon-names';",
    "export * from './types/icons/icon-types';",
    "export * from './hooks/use-icon';"
  ];

  for (const fileName of svgFiles) {
    const componentName = getComponentName(fileName);
    componentNames.push(componentName);
    console.log(`Generating wrapper for ${componentName}...`);

    const wrapperCode = generateWrapperCode(componentName, fileName);
    fs.writeFileSync(path.join(OUTPUT_DIRECTORY, `${componentName}.tsx`), wrapperCode);
    
    indexExports.push(`export { default as ${componentName} } from './components/${componentName}';`);
  }

  // Generate the IconNames type
  const typeCode = `export type SvgIconName = 
  | ${componentNames.map(name => `'${name}'`).join('\n  | ')};
`;
  fs.writeFileSync(path.join(TYPES_DIRECTORY, 'icon-names.ts'), typeCode);

  // Generate src/index.ts
  fs.writeFileSync('./src/index.ts', indexExports.join('\n') + '\n');

  console.log(`✅ Successfully generated ${svgFiles.length} thin wrappers, SvgIconName type, and index.ts!`);
}

generateComponents().catch((error) => {
  console.error('Failed to generate components:', error);
  process.exit(1);
});
