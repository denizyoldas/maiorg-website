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
        'flex flex-col',
        type === 'center' && 'items-center text-center',
        type === 'left' && 'items-start',
        className
      )}
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-warm-gray leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}

export default Title
