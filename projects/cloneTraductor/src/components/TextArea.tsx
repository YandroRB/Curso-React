import { SectionType } from '../types.d';

interface Props {
  type: keyof typeof SectionType;
  loading?: boolean;
  value: string;
  onChange: (value: string) => void;
}
const getPlaceHolder = ({
  type,
  loading,
}: {
  type: keyof typeof SectionType;
  loading?: boolean;
}) => {
  if (type == SectionType.From) return 'Introducir texto';
  if (loading === true) return 'Traduciendo';
  return 'Traducción';
};
function TextArea({ type, loading, value, onChange }: Props) {
  const style = type === SectionType.To ? 'bg-slate-100' : '';
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <textarea
      className={style}
      rows={7}
      cols={5}
      disabled={type === SectionType.To}
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type == SectionType.From}
      value={value}
      onChange={handleChange}
    ></textarea>
  );
}

export default TextArea;
