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
      <h2 className="section-title relative text-3xl font-bold text-center uppercase pb-1">
        {title}
      </h2>
      {subtitle && <p className="text-center mt-2">{subtitle}</p>}
    </div>
  )
}

export default Title
