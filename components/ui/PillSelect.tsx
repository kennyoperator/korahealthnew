'use client'

interface PillOption {
  value: string
  label: string
}

interface PillSelectProps {
  options: PillOption[]
  value: string | string[]
  onChange: (value: string | string[]) => void
  multiple?: boolean
  error?: boolean
}

export default function PillSelect({ options, value, onChange, multiple = false, error = false }: PillSelectProps) {
  const handleClick = (optValue: string) => {
    if (multiple) {
      const arr = Array.isArray(value) ? value : []
      if (arr.includes(optValue)) {
        onChange(arr.filter(v => v !== optValue))
      } else {
        onChange([...arr, optValue])
      }
    } else {
      onChange(optValue)
    }
  }

  const isSelected = (optValue: string) => {
    if (multiple) {
      return Array.isArray(value) && value.includes(optValue)
    }
    return value === optValue
  }

  return (
    <div className="flex flex-wrap gap-2" role={multiple ? 'group' : 'radiogroup'}>
      {options.map(opt => {
        const selected = isSelected(opt.value)
        return (
          <button
            key={opt.value}
            type="button"
            role={multiple ? 'checkbox' : 'radio'}
            aria-checked={selected}
            onClick={() => handleClick(opt.value)}
            className="transition-all duration-200 cursor-pointer text-sm font-medium rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            style={{
              padding: '10px 16px',
              border: selected
                ? '1px solid transparent'
                : error
                ? `1px solid var(--kora-error)`
                : '1px solid var(--kora-border)',
              backgroundColor: selected ? 'var(--kora-brand)' : 'var(--kora-bg)',
              color: selected ? '#fff' : 'var(--kora-text-body)',
            }}
            onMouseEnter={e => {
              if (!selected) {
                const t = e.currentTarget as HTMLElement
                t.style.borderColor = 'rgba(27,58,92,0.4)'
              }
            }}
            onMouseLeave={e => {
              if (!selected) {
                const t = e.currentTarget as HTMLElement
                t.style.borderColor = error ? 'var(--kora-error)' : 'var(--kora-border)'
              }
            }}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
