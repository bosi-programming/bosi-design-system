export interface SelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelChildren?: React.ReactNode;
  options: { id: string | number; label: React.ReactNode }[];
}

export function Selector({ labelChildren, options, ...rest }: SelectorProps) {
  return (
    <div>
      <select
        aria-label={labelChildren as string}
        {...rest}
        className={`dark:bg-green dark:border-emerald dark:placeholder-emerald dark:text-peach dark:focus:ring-emerald dark:focus:border-emerald mb-3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 md:mb-6 ${rest.className}`}
      >
        <option value="" disabled>
          {labelChildren}
        </option>
        {options.map(({ id, label }) => {
          if (id === '') return null;
          return (
            <option key={id} value={id}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
