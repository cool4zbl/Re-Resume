import React from 'react'
import classnames from 'classnames'
import Heading, { SectionHeading } from '../Heading'
import styles from './index.less'

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

interface ListItemMetaProps {
  title?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const ItemMeta: React.FC<ListItemMetaProps> = ({
  className,
  title,
  description,
  extra,
  ...others
}: ListItemMetaProps) => {
  const metaCls = classnames(styles.meta, className)

  return (
    <div {...others} className={metaCls}>
      {title && <Heading className={styles.itemTitle}>{title}</Heading>}
      {extra && <div className={styles.extra}>{extra}</div>}
      {description && (
        <div className={styles.itemDescription}>{description}</div>
      )}
    </div>
  )
}

export interface ListItemTypeProps extends React.FC<ListItemProps> {
  Meta: typeof ItemMeta
}

/**
 * HTML structure
 * Item
 *  Meta
 *    Title | Extra
 *    Description
 */
export const BaseListItem: ListItemTypeProps = ({
  className,
  children,
  ...rest
}: ListItemProps) => {
  const itemCls = classnames(styles.item, className)

  return (
    <li {...rest} className={itemCls}>
      {children}
    </li>
  )
}

export interface BaseListProps<T> {
  dataSource: T[]
  title?: React.ReactNode
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  renderItem: (item: T, index?: number) => React.ReactNode
}

function BaseList<T>({
  dataSource = [],
  title,
  renderItem,
  className,
  children,
  ...rest
}: BaseListProps<T>): React.ReactNode {
  const cls = classnames(styles.list, className)

  let childrenContent = null
  if (typeof renderItem === 'function') {
    const dataSourceItems = dataSource.map((ds, index) => renderItem(ds, index))
    childrenContent = <ul className={cls}>{dataSourceItems}</ul>
    // childrenContent = React.Children.map(dataSourceItems, (child) => (
    // ))
  }

  return (
    <section {...rest} className={styles.listWrapper}>
      {title && <SectionHeading>{title}</SectionHeading>}
      <div className={cls}>
        {childrenContent}
        {children}
      </div>
    </section>
  )
}

BaseList.Item = BaseListItem
BaseList.Item.Meta = ItemMeta

export default BaseList
