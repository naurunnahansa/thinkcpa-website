'use client'

import { Fragment, type JSX } from 'react'

interface RichTextNode {
  type?: string
  tag?: string
  format?: number | string
  text?: string
  children?: RichTextNode[]
  url?: string
  relationTo?: string
  value?: any
  listType?: string
}

interface RichTextProps {
  content: {
    root?: {
      children?: RichTextNode[]
    }
  } | RichTextNode[] | null | undefined
}

// Format flags for Lexical
const IS_BOLD = 1
const IS_ITALIC = 2
const IS_STRIKETHROUGH = 4
const IS_UNDERLINE = 8
const IS_CODE = 16

function renderText(text: string, format: number): React.ReactNode {
  let result: React.ReactNode = text

  if (format & IS_CODE) {
    result = <code className="bg-muted px-1 py-0.5 rounded text-sm">{result}</code>
  }
  if (format & IS_BOLD) {
    result = <strong>{result}</strong>
  }
  if (format & IS_ITALIC) {
    result = <em>{result}</em>
  }
  if (format & IS_UNDERLINE) {
    result = <u>{result}</u>
  }
  if (format & IS_STRIKETHROUGH) {
    result = <s>{result}</s>
  }

  return result
}

function RichTextNode({ node, index }: { node: RichTextNode; index: number }): React.ReactNode {
  // Text node
  if (node.type === 'text' && node.text !== undefined) {
    const format = typeof node.format === 'number' ? node.format : 0
    return <Fragment key={index}>{renderText(node.text, format)}</Fragment>
  }

  // Linebreak
  if (node.type === 'linebreak') {
    return <br key={index} />
  }

  // Link
  if (node.type === 'link') {
    return (
      <a
        key={index}
        href={node.url || '#'}
        className="text-primary hover:underline"
        target={node.url?.startsWith('http') ? '_blank' : undefined}
        rel={node.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </a>
    )
  }

  // List item
  if (node.type === 'listitem') {
    return (
      <li key={index}>
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </li>
    )
  }

  // List
  if (node.type === 'list') {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul'
    return (
      <ListTag key={index} className={node.listType === 'number' ? 'list-decimal' : 'list-disc'}>
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </ListTag>
    )
  }

  // Heading
  if (node.type === 'heading') {
    const Tag = (node.tag || 'h2') as keyof JSX.IntrinsicElements
    return (
      <Tag key={index}>
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </Tag>
    )
  }

  // Paragraph
  if (node.type === 'paragraph') {
    return (
      <p key={index}>
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </p>
    )
  }

  // Quote
  if (node.type === 'quote') {
    return (
      <blockquote key={index} className="border-l-4 border-primary pl-4 italic">
        {node.children?.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </blockquote>
    )
  }

  // Default: render children if available
  if (node.children && Array.isArray(node.children)) {
    return (
      <Fragment key={index}>
        {node.children.map((child, i) => (
          <RichTextNode key={i} node={child} index={i} />
        ))}
      </Fragment>
    )
  }

  return null
}

export function RichText({ content }: RichTextProps) {
  if (!content) {
    return null
  }

  // Handle Lexical format (with root)
  if ('root' in content && content.root?.children) {
    return (
      <div className="rich-text">
        {content.root.children.map((node, index) => (
          <RichTextNode key={index} node={node} index={index} />
        ))}
      </div>
    )
  }

  // Handle array format
  if (Array.isArray(content)) {
    return (
      <div className="rich-text">
        {content.map((node, index) => (
          <RichTextNode key={index} node={node} index={index} />
        ))}
      </div>
    )
  }

  return null
}
