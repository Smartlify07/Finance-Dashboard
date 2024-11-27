interface ExpenseCategoryIndicatorProps {
  type: 'income' | 'outcome' | 'freeBudget';
  indicatorName: string;
}
const ExpenseCategoryIndicator = ({
  type,
  indicatorName,
}: ExpenseCategoryIndicatorProps) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <span
        style={{
          backgroundColor:
            type === 'income'
              ? 'var(--blue-primary)'
              : type === 'outcome'
              ? 'var(--green)'
              : 'var(--black-100)',
        }}
        className="rounded-full w-[1rem] h-[1rem] "
      ></span>
      <span className="text-black text-[1.4rem]">{indicatorName}</span>
    </div>
  );
};

export default ExpenseCategoryIndicator;
