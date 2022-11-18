import cx from 'classnames'

interface Props {
  title: string
  type?: 'center' | 'left'
  subtitle?: string
  className?: string
}

const Title = ({ title, subtitle, className, type = 'left' }: Props) => {
  return (
    <div
      className={cx(
        'title flex flex-col',
        type === 'center' && 'items-center text-center',
        type === 'left' && 'items-start',
        className
      )}
    >
      <h2 className="section-title relative pb-1 text-center text-3xl font-bold uppercase">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-center">{subtitle}</p>}
    </div>
  )
}

export default Title
