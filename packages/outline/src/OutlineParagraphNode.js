// @flow strict

import type {NodeKey} from './OutlineNode';

import {BlockNode} from './OutlineBlockNode';

export class ParagraphNode extends BlockNode {
  type: 'paragraph';

  constructor(key?: NodeKey) {
    super(key);
    this.type = 'paragraph';
  }
  static parse(data: {flags: number}): ParagraphNode {
    const header = new ParagraphNode();
    header.flags = data.flags;
    return header;
  }
  clone(): ParagraphNode {
    const clone = new ParagraphNode(this.key);
    clone.children = [...this.children];
    clone.parent = this.parent;
    clone.flags = this.flags;
    return clone;
  }

  // View

  createDOM(): HTMLElement {
    return document.createElement('p');
  }
  updateDOM(prevNode: ParagraphNode, dom: HTMLElement): boolean {
    return false;
  }
}

export function createParagraphNode(): ParagraphNode {
  const paragraph = new ParagraphNode();
  // Paragraph nodes align with text direection
  paragraph.makeDirectioned();
  return paragraph;
}