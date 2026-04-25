// components/StarRating.tsx

type StarRatingProps = {
  rating?: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  showWhenUndefined?: boolean;
};

export default function StarRating({
  rating,
  max = 5,
  size = 20,
  showValue = true,
  showWhenUndefined = true,
}: StarRatingProps) {
  const hasRating = typeof rating === "number" && rating !== undefined;

  const safeRating = hasRating
    ? Math.min(Math.max(rating as number, 0), max)
    : 0;

  const fillPercentage = (safeRating / max) * 100;

  return (
    <div className="flex items-center gap-2">
      <div
        className="relative inline-block leading-none"
        style={{
          fontSize: `${size}px`,
        }}
        aria-label={
          hasRating
            ? `${safeRating.toFixed(1)} out of ${max} stars`
            : "N/A"
        }
      >
        {/* Gray stars */}
        <div className="text-slate-300">
          {"★".repeat(max)}
        </div>

        {/* Filled stars */}
        {hasRating && (
          <div
            className="absolute left-0 top-0 overflow-hidden whitespace-nowrap text-yellow-400"
            style={{
              width: `${fillPercentage}%`,
            }}
          >
            {"★".repeat(max)}
          </div>
        )}
      </div>

      {/* Value text */}
      {showValue && (
        <span className="text-sm font-medium text-slate-700">
          {hasRating
            ? `${safeRating.toFixed(1)}/${max}`
            : "N/A"}
        </span>
      )}
    </div>
  );
}